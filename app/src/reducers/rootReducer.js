import { combineReducers } from 'redux';
import { studiosReducer } from './studiosReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
    studios: studiosReducer,
    search: searchReducer
});
