import React, { useState } from 'react';

function Step4() {
  const [showSpotify, setShowSpotify] = useState(false);

  const handleShowSpotify = () => {
    setShowSpotify(true);
  };

  return (
    <div className="container">
      <div className="card final-step">
        <p>¡Aquí está tu cartita!</p>
        <p>Holis gg, creo que no hay nada más lindo que pasar tiempo con vos, reírnos juntos. Sé que estamos pasando por días difíciles como pareja, pero de verdad creo que podemos usar estas diferencias para hacer nuestra relación más fuerte. Cada problema es una chance para aprender y crecer juntos como PINGÜINO enamorados. Quiero que sepas que voy a poner todo de mi parte para que te sientas bien y segura. No me gusta verte llorar, y haré todo lo que pueda para que siempre sientas mi amor y apoyo.</p>
        <p>También quiero que sepas que confío plenamente en vos y en tu capacidad para salir adelante en tus estudios. Sos una CUCHIGRUMI fuerte, y estoy seguro de que vas a lograr todo lo que te propongas. Siempre voy a estar a tu lado para apoyarte, celebrar tus logros y ayudarte cuando las cosas se pongan difíciles.</p>
        <p>Prometo amarte, respetarte y valorarte, hoy y siempre. En este universo PINGÜINERO que vamos construyendo juntos sea asno y lindo.</p>
        <p>Y bueno recorda, que cada paso que demos, en cada desafío que enfrentemos, estaré a tu lado, brindándote seguridad y amor. Porque juntos somos más fuertes, y el amor que compartimos . Gracias por hacerme una mejor persona y un mejor novio.</p>
        <button onClick={handleShowSpotify}>Descubrir el regalito extra</button>
        {showSpotify && (
          <iframe
            style={{ borderRadius: '12px', marginTop: '20px' }}
            src="https://open.spotify.com/embed/track/7guVlnmdqpcFjJmwP6RSRr?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default Step4;
