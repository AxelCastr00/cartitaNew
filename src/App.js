import React, { useState } from 'react';
import Step1 from './seccion1';
import Step2 from './seccion2';
import Step3 from './seccion3';
import Step4 from './seccion4';
import Step5 from './final';

function App() {
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);
  const [iceCream, setIceCream] = useState([]);
  const [footballClub, setFootballClub] = useState([]);
  const [alert, setAlert] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNextClick = () => {
    if (name.toLowerCase() === 'sol') {
      setStep(step + 1);
    } else {
      showAlert('Parece que te confundiste, qué bajón');
    }
  };

  const handleIceCreamChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setIceCream([...iceCream, value]);
    } else {
      setIceCream(iceCream.filter(flavor => flavor !== value));
    }
  };

  const handleFootballClubChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFootballClub([...footballClub, value]);
    } else {
      setFootballClub(footballClub.filter(club => club !== value));
    }
  };

  const handleAcceptClick = () => {
    const correctIceCreams = ['chocolate', 'dulce de leche en todas sus facetas'];
    const correctClubs = ['boca', 'san martin'];

    const iceCreamsCorrect = correctIceCreams.every(flavor => iceCream.includes(flavor));
    const clubsCorrect = correctClubs.every(club => footballClub.includes(club));

    if (iceCreamsCorrect && clubsCorrect) {
      setStep(step + 1);
    } else {
      showAlert('Las respuestas no son correctas');
    }
  };

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <div>
      {alert && (
        <div className="alert">{alert}</div>
      )}
      {step === 1 && (
        <Step1 name={name} handleNameChange={handleNameChange} handleNextClick={handleNextClick} />
      )}
      {step === 2 && (
        <Step2
          iceCream={iceCream}
          footballClub={footballClub}
          handleIceCreamChange={handleIceCreamChange}
          handleFootballClubChange={handleFootballClubChange}
          handleAcceptClick={handleAcceptClick}
        />
      )}
      {step === 3 && (
        <Step3 setStep={setStep} />
      )}
    {step === 4 && (
  <Step4 setStep={setStep} />
)}

      {step === 5 && (
  <Step5 />
)}
    </div>
  );
}

export default App;
