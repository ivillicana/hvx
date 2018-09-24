import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import activitiesReducer from './activitiesReducer';

export default combineReducers({
  restaurants: restaurantReducer,
  activities: activitiesReducer
});