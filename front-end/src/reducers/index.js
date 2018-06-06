import { combineReducers } from 'redux';
import dogs from './dogs';
import token from './token';

export default combineReducers({ token, dogs });

