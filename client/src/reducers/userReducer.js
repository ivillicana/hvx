export default function userReducer (
  state = {
      token: '',
      user: {},
      error: ''
  },
  action
) {
  switch (action.type) {
    case 'CREATE_USER':
      return {...state,
        token: action.payload
      }
    case 'LOG_IN_USER':
      return {...state,
        token: action.payload
      }
    case 'LOG_OUT_USER':
      return {...state,
        token: '',
        user: {}
      }
    case 'SET_USER':
      return {...state, user: {...action.payload}}
    case 'SET_ERROR':
      return {...state, error: action.payload}
    default:
      return state;
  }
  
}