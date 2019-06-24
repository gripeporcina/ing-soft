import { combineReducers } from 'redux';
import itemReducer from './itemReducer';


export default combineReducers({
    item: itemReducer
    //aqui van los reducers proximos
});