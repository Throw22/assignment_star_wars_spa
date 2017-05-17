import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../actions/peopleActions';
import { getFilms } from '../actions/filmsActions';
import { getPlanets } from '../actions/planetsActions';
import { getVehicles } from '../actions/vehiclesActions';
import { getStarships } from '../actions/starshipsActions';
import { getSpecies } from '../actions/speciesActions';
import ResourceList from '../components/ResourceList';

class ResourceListContainer extends Component {
  componentDidMount() {
    this.props.getResource();
  }
  // componentWillReceiveProps() {
  //   this.props.getResource();
  // }

  render() {
    return (
      <ResourceList resource={this.props.resource} isFetching={this.props.isFetching} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const resourceType = ownProps.match.params.resourceType;
  return {
    resource: state[resourceType].data,
    isFetching: state[resourceType].isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const resourceType = ownProps.match.params.resourceType;
  let getResource;
  switch(resourceType) {
    case "people":
      getResource = () => {
          dispatch(getPeople());
      }
      break;
    case "planets":
      getResource = () => {
          dispatch(getPlanets());
      }
      break;
    case "films":
      getResource = () => {
          dispatch(getFilms());
      }
      break; 
  }
  return { getResource }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceListContainer);


