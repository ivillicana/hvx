export default function restaurantReducer (
  state = { 
    breakfast: [],
    lunch: [],
    dinner: []
  },
  action
) {

  switch (action.type) {
    
    case 'FETCH_BREAKFAST_RESTAURANTS':
      return {...state, breakfast: action.payload}
  
    default:
      return state;
  }
  
}