import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../actions/peopleActions';
import People from '../components/People';

// class PeopleContainer extends Component {

//   render() {
//     const resourceType = this.props.match.params.resourceType;
//     switch(resourceType) {
//       case "people":
//         return (
//           <People people={this.props.resource} isFetching={this.props.isFetching} />
//         );
//     }
//   }
// }

const mapStateToProps = (state, ownProps) => {
  const resourceType = ownProps.match.params.resourceType;
  return {
    resource: state[resourceType].data,
    isFetching: state[resourceType].isFetching
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);