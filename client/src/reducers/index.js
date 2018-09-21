import { combineReducers } from 'redux';
import userReducer from './userReducer';
import restaurantReducer from './restaurantReducer';
import activitiesReducer from './activitiesReducer';

export default combineReducers({
  user: userReducer,
  restaurants: restaurantReducer,
  activities: activitiesReducer
});