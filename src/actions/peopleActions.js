export const GET_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_FAILURE = 'GET_PEOPLE_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

export const getPeopleRequest = getRequest(GET_REQUEST);
export const getPeopleSuccess = getSuccess(GET_SUCCESS);
export const getPeopleFailure = getRequest(GET_FAILURE);

export const getPeople = getResource(
  'people',
  getPeopleRequest,
  getPeopleSuccess,
  getPeopleFailure
);
