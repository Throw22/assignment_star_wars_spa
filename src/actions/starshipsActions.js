export const GET_REQUEST = 'GET_STARSHIPS_REQUEST';
export const GET_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_FAILURE = 'GET_STARSHIPS_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

export const getStarshipsRequest = getRequest(GET_REQUEST);
export const getStarshipsSuccess = getSuccess(GET_SUCCESS);
export const getStarshipsFailure = getRequest(GET_FAILURE);
export const getStarships = getResource("starships", getStarshipsRequest, getStarshipsSuccess, getStarshipsFailure)