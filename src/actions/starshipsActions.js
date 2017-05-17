export const GET_REQUEST = 'GET_STARSHIPS_REQUEST';
export const GET_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_FAILURE = 'GET_STARSHIPS_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

const getStarshipsRequest = getRequest(GET_REQUEST);
const getStarshipsSuccess = getSuccess(GET_SUCCESS);
const getStarshipsFailure = getRequest(GET_FAILURE);
const getStarships = getResource("starships", getStarshipsRequest, getStarshipsSuccess, getStarshipsFailure)