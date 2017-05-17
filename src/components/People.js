import React from "react";
import PropTypes from 'prop-types';


let peopleList = (people) => {
	return people.results.map((person) => {
		return (<p>{person.name}</p>)
	})
}

const People = ({people, isFetching}) => {
	if (isFetching) {
		return (<p>Loading...</p>)
	}
	return (
        <div >
            {peopleList}
        </div>
	);
};

People.propTypes = {
    people: PropTypes.array.isRequired,
    isFetching: PropTypes.bool
};

export default People;