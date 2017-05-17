export const GET_REQUEST = 'GET_SPECIES_REQUEST';
export const GET_SUCCESS = 'GET_SPECIES_SUCCESS';
export const GET_FAILURE = 'GET_SPECIES_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

export const getSpeciesRequest = getRequest(GET_REQUEST);
export const getSpeciesSuccess = getSuccess(GET_SUCCESS);
export const getSpeciesFailure = getRequest(GET_FAILURE);
export const getSpecies = getResource("species", getSpeciesRequest, getSpeciesSuccess, getSpeciesFailure)