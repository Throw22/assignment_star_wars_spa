const initialState = {
  data: [],
  isFetching: false,
  error: null
};


export function fetcher(Actions) {
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
      default:
        return state;
    }
  };
}