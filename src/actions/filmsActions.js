export const GET_REQUEST = 'GET_FILMS_REQUEST';
export const GET_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FAILURE = 'GET_FILMS_FAILURE';
import { getRequest, getSuccess, getFailure, getResource } from './helpers';

const getFilmsRequest = getRequest(GET_REQUEST);
const getFilmsSuccess = getSuccess(GET_SUCCESS);
const getFilmsFailure = getRequest(GET_FAILURE);
const getFilms = getResource("films", getFilmsRequest, getFilmsSuccess, getFilmsFailure)