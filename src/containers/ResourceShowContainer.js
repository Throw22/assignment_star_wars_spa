import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person';
import Planet from '../components/Planet';
import Film from '../components/Film';
import Starship from '../components/Starship';
import Species from '../components/Species';
import Vehicle from '../components/Vehicle';

class ResourceShowContainer extends Component {

  render() {
    const resourceType = this.props.match.params.resourceType;
    const id = this.props.match.params.id;
    const individualResource = this.props.resource.results.find((indRes) => {
	    let urlParse = indRes.url.split('/');
	    let resId = urlParse[urlParse.length - 2];
    	return resId == id;
    })
    switch(resourceType) {
      case "people":
        return (
          <Person person={individualResource} isFetching={this.props.isFetching} />
        );
      case "films":
        return (
          <Film film={individualResource} isFetching={this.props.isFetching} />
        );
      case "planets":
        return (
          <Planet planet={individualResource} isFetching={this.props.isFetching} />
        );
      case "species":
        return (
          <Species species={individualResource} isFetching={this.props.isFetching} />
        );
      case "starships":
        return (
          <Starship starship={individualResource} isFetching={this.props.isFetching} />
        );
      case "vehicles":
        return (
          <Vehicle vehicle={individualResource} isFetching={this.props.isFetching} />
        );                       
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const resourceType = ownProps.match.params.resourceType;
  return {
    resource: state[resourceType].data,
    isFetching: state[resourceType].isFetching
  };
};


export default connect(mapStateToProps, null)(ResourceShowContainer);