import React from 'react';

const Vehicles = ({ vehicle }) => {
  const {
    name,
    manufacturer,
    model,
    consumables,
    crew
  } = vehicle;

  return (
    <div>
      <br />
      <div className="Vehicle card" style={{}}>
        <div className="card-block">
          <h4>{name}</h4>
          <p>{manufacturer}</p>
          <p>{model}</p>
          <p>{consumables}</p>
          <p>{crew}</p>
        </div>

      </div>
    </div>
  );
};

export default Vehicles;
