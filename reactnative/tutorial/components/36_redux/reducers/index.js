import { combineReducers } from 'redux';
import taskReducer from './taskReducers';

const allReducers = combineReducers({
    taskReducer
});

export default allReducers;