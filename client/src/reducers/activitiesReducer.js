export default function activitiesReducer(
  state = {
    museums: [],
    nature: [],
    performingArts: []
  }, 
  action
) {
  switch (action.type) {
    case 'FETCH_MUSEUMS':
      return {...state, museums: [...action.payload]}
    case 'FETCH_PERFORMING_ARTS':
      return {...state, performingArts: [...action.payload]}
    case 'FETCH_NATURE':
      return {...state, nature: [...action.payload]}
    default:
      return state;
  }
}