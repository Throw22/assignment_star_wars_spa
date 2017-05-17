import React from 'react';


const Person = ({person}) => {
  const { name, gender, birth_year, height, mass } = person;

  
  return (
    <div>
      <br/>
      <div
        className="Person card"
        style={{}}
      >
        <div className="card-block">
          <h4>{name}</h4>
          <p>{gender}</p>
          <p>{birth_year}</p>
          <p>{height}</p>
          <p>{mass}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Person