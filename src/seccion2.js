import React from 'react';

function Step2({ iceCream, handleIceCreamChange, handleFootballClubChange, handleAcceptClick }) {
  return (
    <div className="card">
      <p className="card-title">¿Qué sabor de helado te gusta?</p>
      <div className="checkbox-group">
        <input id="chocolate" type="checkbox" value="chocolate" onChange={handleIceCreamChange} />
        <label className="checkbox-label" htmlFor="chocolate">Chocolate</label>
        
        <input id="tiramisu" type="checkbox" value="tiramisu" onChange={handleIceCreamChange} />
        <label className="checkbox-label" htmlFor="tiramisu">Tiramisu</label>
        
        <input id="quinotos" type="checkbox" value="quinotos" onChange={handleIceCreamChange} />
        <label className="checkbox-label" htmlFor="quinotos">Quinotos</label>
        
        <input id="dulce-de-leche" type="checkbox" value="dulce de leche en todas sus facetas" onChange={handleIceCreamChange} />
        <label className="checkbox-label" htmlFor="dulce-de-leche">Dulce de leche en todas sus facetas</label>
      </div>
      
      <p className="card-title">¿De qué club sos?</p>
      <div className="checkbox-group">
        <input id="river" type="checkbox" value="river" onChange={handleFootballClubChange} />
        <label className="checkbox-label" htmlFor="river">River</label>
        
        <input id="san-lorenzo" type="checkbox" value="san lorenzo" onChange={handleFootballClubChange} />
        <label className="checkbox-label" htmlFor="san-lorenzo">San Lorenzo</label>
        
        <input id="san-martin" type="checkbox" value="san martin" onChange={handleFootballClubChange} />
        <label className="checkbox-label" htmlFor="san-martin">San Martin SJ</label>
        
        <input id="boca" type="checkbox" value="boca" onChange={handleFootballClubChange} />
        <label className="checkbox-label" htmlFor="boca">Boca</label>
      </div>
      
      <button onClick={handleAcceptClick} className="button">Continuar</button>
    </div>
  );
}

export default Step2;
