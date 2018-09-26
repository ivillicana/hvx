export default function postsReducer(state = [], action){
  switch (action.type) {
    case 'CREATE_POST':
      return [...state, action.payload]
    case 'FETCH_POSTS':
      return [...action.payload]
    case 'CREATE_COMMENT':
      let prevState;
      prevState = state.filter(post => post.id !== action.payload.id)
      return [...prevState, action.payload]
    default:
      return state;
  }
}