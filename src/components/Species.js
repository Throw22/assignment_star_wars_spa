import React from 'react';

const Species = ({ species }) => {
  const {
    name,
    language,
    classification,
    designation,
    average_lifespan
  } = species;

  return (
    <div>
      <br />
      <div className="Species card" style={{}}>
        <div className="card-block">
          <h4>{name}</h4>
          <p>{language}</p>
          <p>{classification}</p>
          <p>{designation}</p>
          <p>{average_lifespan}</p>
        </div>

      </div>
    </div>
  );
};

export default Species;
