import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResourceContainer extends Component {
  componentDidMount() {
    getResource();
  }

  render() {}
}

const mapStateToProps = state => {
  return {
    people: state.people.data,
    isFetching: state.people.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getResource: () => {
      dispatch(getResource(resourceType));
    }, 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceContainer);
