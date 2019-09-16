import counterReducer from './reducers/counter';
import loggedReducer from './reducers/isLogged';

// the COMBINE REDUCERS is an Function with Objects... where each object is a state
// don't over complicate it, it's very easy 
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;
