import * as PeopleActions from '../actions/peopleActions';
import * as PlanetsActions from '../actions/planetsActions';
import * as VehiclesActions from '../actions/vehiclesActions';
import * as StarshipsActions from '../actions/starshipsActions';
import * as SpeciesActions from '../actions/speciesActions';
import * as FilmsActions from '../actions/filmsActions';

import { fetcher } from './helpers';

import { combineReducers } from 'redux';


const people = fetcher(PeopleActions);
const planets = fetcher(PlanetsActions);
const vehicles = fetcher(VehiclesActions);
const starships = fetcher(StarshipsActions);
const species = fetcher(SpeciesActions);
const films = fetcher(FilmsActions);

export default combineReducers({
	people,
	planets,
	vehicles,
	starships,
	species,
	films
});