import { combineReducers } from 'redux';
import dogs from './dogs';
import token from './token';
import profile from './profile';
import picture from './picture';

export default combineReducers({ 
  token, profile, picture, dogs, 
});
