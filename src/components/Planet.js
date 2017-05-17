import React from 'react';


const Planet = ({planet}) => {
  const { name, climate, gravity, population, terrain } = planet;

  return (
    <div>
      <br/>
      <div
        className="Planet card"
        style={{}}
      >
        <div className="card-block">
          <h4>{name}</h4>
          <p>{climate}</p>
          <p>{gravity}</p>
          <p>{population}</p>
          <p>{terrain}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Planet