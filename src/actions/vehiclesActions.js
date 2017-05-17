export const GET_REQUEST = 'GET_VEHICLES_REQUEST';
export const GET_SUCCESS = 'GET_VEHICLES_SUCCESS';
export const GET_FAILURE = 'GET_VEHICLES_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

const getVehiclesRequest = getRequest(GET_REQUEST);
const getVehiclesSuccess = getSuccess(GET_SUCCESS);
const getVehiclesFailure = getRequest(GET_FAILURE);
const getVehicles = getResource("vehicles", getVehiclesRequest, getVehiclesSuccess, getVehiclesFailure)