export const GET_REQUEST = 'GET_PLANETS_REQUEST';
export const GET_SUCCESS = 'GET_PLANETS_SUCCESS';
export const GET_FAILURE = 'GET_PLANETS_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

export const getPlanetsRequest = getRequest(GET_REQUEST);
export const getPlanetsSuccess = getSuccess(GET_SUCCESS);
export const getPlanetsFailure = getRequest(GET_FAILURE);
export const getPlanets = getResource("planets", getPlanetsRequest, getPlanetsSuccess, getPlanetsFailure)