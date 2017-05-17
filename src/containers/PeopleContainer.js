import React, { Component } from 'react';
import { connect } from 'react-redux';

class PeopleContainer extends Component {
  componentDidMount() {
    //dispatch to check if there are people in state, or fetch
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
    //dispatch for getting people
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
