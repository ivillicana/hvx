export default function restaurantReducer (
  state = { 
    breakfast: [],
    dinner: [],
    drinks: [],
    restaurant: {}
  },
  action
) {

  switch (action.type) {
    
    case 'FETCH_BREAKFAST_RESTAURANTS':
      return {...state, breakfast: [...action.payload]}
    case 'FETCH_DINNER_RESTAURANTS':
      return {...state, dinner: [...action.payload]}
    case 'FETCH_RESTAURANT':
      return {...state, restaurant: {...action.payload}}
    case 'FETCH_DRINKS_RESTAURANTS':
      return {...state, drinks: [...action.payload]}
    default:
      return state;
  }
  
}