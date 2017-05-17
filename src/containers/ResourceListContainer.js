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
  //Component only mounts once (after it gets rendered the first time)
  componentDidMount() {
    const resourceType = this.props.match.params.resourceType;

    switch (resourceType) {
      case 'people':
        this.props.getPeople();
        break;
      case 'planets':
        this.props.getPlanets();
        break;
      case 'species':
        this.props.getSpecies();
        break;
      case 'films':
        this.props.getFilms();
        break;
      case 'vehicles':
        this.props.getVehicles();
        break;
      case 'starships':
        this.props.getStarships();
        break;
    }
  }

  //will update any time match, history, or location change (as part of props)
  componentWillReceiveProps(newProps) {
    //Will need to add logic for pagination to if statement
    if (
      this.props.match.params.resourceType != newProps.match.params.resourceType
    ) {
      const resourceType = newProps.match.params.resourceType;

      switch (resourceType) {
        case 'people':
          this.props.getPeople();
          break;
        case 'planets':
          this.props.getPlanets();
          break;
        case 'species':
          this.props.getSpecies();
          break;
        case 'films':
          this.props.getFilms();
          break;
        case 'vehicles':
          this.props.getVehicles();
          break;
        case 'starships':
          this.props.getStarships();
          break;
      }
    }
  }

  render() {
    return (
      <ResourceList
        resource={this.props.resource}
        isFetching={this.props.isFetching}
      />
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
  return {
    getPeople: () => dispatch(getPeople()),
    getPlanets: () => dispatch(getPlanets()),
    getSpecies: () => dispatch(getSpecies()),
    getFilms: () => dispatch(getFilms()),
    getVehicles: () => dispatch(getVehicles()),
    getStarships: () => dispatch(getStarships())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ResourceListContainer
);
