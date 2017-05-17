export const GET_REQUEST = 'GET_SPECIES_REQUEST';
export const GET_SUCCESS = 'GET_SPECIES_SUCCESS';
export const GET_FAILURE = 'GET_SPECIES_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

const getSpeciesRequest = getRequest(GET_REQUEST);
const getSpeciesSuccess = getSuccess(GET_SUCCESS);
const getSpeciesFailure = getRequest(GET_FAILURE);
const getSpecies = getResource("species", getSpeciesRequest, getSpeciesSuccess, getSpeciesFailure)