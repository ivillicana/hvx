export default function userReducer (
  state = {
      token: ''
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
        token: ''
      }
    default:
      return state;
  }
  
}