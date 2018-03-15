import { combineReducers } from 'redux';
import { studiosReducer } from './studiosReducer';

export const rootReducer = combineReducers({
    studios: studiosReducer
});
