export default function postReducer(state = null, action){
  switch (action.type) {
    case 'FETCH_POST':
      return {...action.payload}
    case 'CREATE_COMMENT':
      return {...action.payload}
    default:
      return state;
  }
}