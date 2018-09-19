export default function userReducer (
  state = {
      name: '',
      id: '',
      email: ''
  },
  action
) {
  switch (action.type) {
    case 'CREATE_USER':
      return {...state,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id
      }
    default:
      return state;
  }
  
}