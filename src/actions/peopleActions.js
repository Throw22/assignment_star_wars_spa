export const GET_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_FAILURE = 'GET_PEOPLE_FAILURE';
import { getSuccess, getRequest, getFailure } from './helpers';

getPeopleSuccess = getSuccess(GET_SUCCESS);
getPeopleRequest = getRequest(GET_REQUEST);
getPeopleFailure = getRequest(GET_FAILURE);
