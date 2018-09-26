import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import activitiesReducer from './activitiesReducer';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import postReducer from './postReducer';

export default combineReducers({
  restaurants: restaurantReducer,
  activities: activitiesReducer,
  user: userReducer,
  posts: postsReducer,
  post: postReducer
});