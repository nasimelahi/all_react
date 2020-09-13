import { combineReducers } from 'redux';
import * as types from '../action/type'
import controlReducer from './controlReducer'


const rootReducer = (combineReducers({
    con: controlReducer
})) 
export default rootReducer