export default function postsReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_POST':
      return [...state, action.payload]
    case 'FETCH_POSTS':
      return [...action.payload]
    default:
      return state;
  }
}