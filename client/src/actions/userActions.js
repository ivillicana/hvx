export const createUser = (userData) => dispatch => {
  fetch('/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: userData.signUpName,
      email: userData.signUpEmail,
      password: userData.signUpPassword,
      password_confirmation: userData.signUpPasswordConfirmation,
      location: userData.signUpCity
    })
  })
  .then(handleResponse)
  .then(token => handleUserCreation(token, dispatch))
  .catch(error => {
    console.log('Error in Signing Up: ', error.statusText)
    
  })
}

export const logInUser = (userData) => dispatch => {
  
  fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: userData.logInEmail,
        password: userData.logInPassword
    })
  })
  .then(handleResponse)
  .then(token => handleUserLogIn(token, dispatch))
  .catch(error => {
    console.log('Error in Log In: ', error.statusText)
    dispatch({type: 'SET_ERROR', payload: error.statusText})
  })
}

export const logOutUser = () => dispatch => {
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('user')
  dispatch({type: 'LOG_OUT_USER', payload: ''})
}

const handleResponse = (response) => {
  // if (!response.ok) {
  //   return Promise.reject({ status: response.status, statusText: response.statusText });
  // }
  return response.json()
}

const handleUserLogIn = (token, dispatch) => {
  localStorage.setItem('jwtToken', token.auth_token)
    dispatch({type: 'LOG_IN_USER', payload: token.auth_token})
    const jwtToken = localStorage.getItem('jwtToken')
    fetch('/user', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`
      }
    })
      .then(resp => resp.json())
      .then(user => {
        dispatch({type:'SET_USER', payload: user})
        localStorage.setItem('user', user.name)
      })
}

const handleUserCreation = (token, dispatch) => {
  if (!token.auth_token){
    dispatch({type: 'SET_ERROR', payload: token.message})
  } else {
    localStorage.setItem('jwtToken', token.auth_token)
    dispatch({type: 'CREATE_USER', payload: token.auth_token})
    const jwtToken = localStorage.getItem('jwtToken')
    fetch('/user', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`
      }
    })
      .then(resp => resp.json())
      .then(user => {
        dispatch({type:'SET_USER', payload: user})
        localStorage.setItem('user', user.name)
      })
  }
 
}
