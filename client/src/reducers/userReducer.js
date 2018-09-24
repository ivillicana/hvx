export default function userReducer (
  state = {
      name: '',
      id: '',
      email: '',
      token: ''
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
    case 'LOG_IN_USER':
      return {...state,
        token: action.payload.jwt
      }
    default:
      return state;
  }
  
}