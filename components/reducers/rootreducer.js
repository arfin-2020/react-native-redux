import todoReducers from "./reducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    todoReducers
})

export default rootReducers;