import { combineReducers } from 'redux';
import * as types from '../action/type'
import controlReducer from './controlReducer';
import todoreducer from './todoreducer'
import blogReducer from './blogReducer'


const rootReducer = (combineReducers({
    con: controlReducer,
    todos : todoreducer,
    blog: blogReducer
})) 
export default rootReducer