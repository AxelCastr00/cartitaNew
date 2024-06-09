import React from 'react';

function Step1({ name, handleNameChange, handleNextClick }) {
  return (
    <div className="card">
      <div className="section-1">
        <label className="input-label">
          Nombre de la persona:
          <input type="text" value={name} onChange={handleNameChange} className="input-field" />
        </label>
        <button onClick={handleNextClick} className="button">Siguiente</button>
      </div>
    </div>
  );
}

export default Step1;
