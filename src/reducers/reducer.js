import * as PeopleActions from './peopleActions';
import * as PlanetsActions from './planetsActions';
import * as VehiclesActions from './vehiclesActions';
import * as StarshipsActions from './starshipsActions';
import * as SpeciesActions from './speciesActions';
import * as FilmsActions from './filmsActions';

import { fetcher } from './helpers';

import { combineReducers } from 'redux';


const people = fetcher(PeopleActions);
const planets = fetcher(PlanetsActions);
const vehicles = fetcher(VehiclesActions);
const starships = fetcher(StarshipsActions);
const species = fetcher(SpeciesActions);
const films = fetcher(FilmsActions);

export default starwarsApp = combineReducers({
	people,
	planets,
	vehicles,
	starships,
	species,
	films
});