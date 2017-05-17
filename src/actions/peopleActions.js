export const GET_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_FAILURE = 'GET_PEOPLE_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

const getPeopleRequest = getRequest(GET_REQUEST);
const getPeopleSuccess = getSuccess(GET_SUCCESS);
const getPeopleFailure = getRequest(GET_FAILURE);
const getPeople = getResource("people", getPeopleRequest, getPeopleSuccess, getPeopleFailure)