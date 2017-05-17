import * as PeopleActions from './peopleActions';
import * as PlanetsActions from './planetsActions';
import * as VehiclesActions from './vehiclesActions';
import * as StarshipsActions from './starshipsActions';
import * as SpeciesActions from './speciesActions';
import * as FilmsActions from './filmsActions';

const initialState = {
  data: [],
  isFetching: false,
  error: null
};

function fetcher(Actions) {
  return function(state = initialState, action) {
    switch (action.type) {
      case Actions.GET_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case Actions.GET_SUCCESS:
        return {
          ...state,
          data: action.data,
          isFetching: false
        };
      case Actions.GET_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.error
        };
    }
  };
}

const people = fetcher(PeopleActions);

export function people(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_PEOPLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        data: actions.data
      };
  }
}
