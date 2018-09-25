import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import activitiesReducer from './activitiesReducer';
import userReducer from './userReducer';

export default combineReducers({
  restaurants: restaurantReducer,
  activities: activitiesReducer,
  user: userReducer
});