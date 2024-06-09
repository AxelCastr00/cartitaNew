import React from 'react';

function Step3({ setStep }) {
  return (
    <div className="card">
      <p>Si eres Sol, antes de continuar debes aceptar los términos:</p>
      <label>
        <input type="checkbox" />
        Acepto los términos del loquito de mi novio
      </label>
      <button onClick={() => setStep(step => step + 1)}>Continuar</button>
    </div>
  );
}

export default Step3;
