import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let peopleList = people => {
  if (!people.results) return null;
  return people.results.map(person => {
    http: let url = person.url.split('/').splice; //localhost:3000/http://swapi.co/api/people/3/

    return (
      <Link to={`${person.url}`}><p key={person.name}>{person.name}</p></Link>
    );
  });
};

const People = ({ people, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {peopleList(people)}
    </div>
  );
};

People.propTypes = {
  people: PropTypes.object.isRequired,
  isFetching: PropTypes.bool
};

export default People;
