import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../actions/peopleActions'
import People from '../components/People'

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    return (
      <People people={this.props.people} isFetching={this.props.isFetching} />
    )
  }
}

const mapStateToProps = state => {
  return {
    people: state.people.data,
    isFetching: state.people.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeople: () => {
      dispatch(getPeople());
    }, 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
