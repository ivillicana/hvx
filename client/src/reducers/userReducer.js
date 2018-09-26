export default function userReducer (
  state = {
      token: '',
      user: {}
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
    default:
      return state;
  }
  
}