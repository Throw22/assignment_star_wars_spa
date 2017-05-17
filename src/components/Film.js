import React from 'react';


const Film = ({film}) => {
  const { title, director, producer, release_date } = film;

  
  return (
    <div>
      <br/>
      <div
        className="Film card"
        style={{}}
      >
        <div className="card-block">
          <h4>{title}</h4>
          <p>{director}</p>
          <p>{producer}</p>
          <p>{release_date}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Film