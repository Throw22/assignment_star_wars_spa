import React from 'react';

const Starship = ({ starship }) => {
  const {
    name,
    manufacturer,
    model,
    starship_class
  } = starship;

  return (
    <div>
      <br />
      <div className="Starship card" style={{}}>
        <div className="card-block">
          <h4>{name}</h4>
          <p>{manufacturer}</p>
          <p>{model}</p>
          <p>{starship_class}</p>
        </div>

      </div>
    </div>
  );
};

export default Starship;
