export const GET_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_FAILURE = 'GET_PEOPLE_FAILURE';

export function getPeopleSuccess(data) {
  return {
    type: GET_SUCCESS,
    data
  };
}

export function getPeopleRequest() {
  return {
    type: GET_REQUEST
  };
}

export function getPeopleFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}