import { combineReducers } from 'redux';

import { fetchBreeds } from '../reducers/breed';

const createRootReducer = () => combineReducers({ fetchBreeds });

export default createRootReducer;
