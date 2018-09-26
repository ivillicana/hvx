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
  .then(response => response.json())
  .then(token => {
    localStorage.setItem('jwtToken', token.auth_token)
    dispatch({type: 'CREATE_USER', payload: token.auth_token})
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
  .then(response => response.json())
  .then(token => {
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
  })
}

export const logOutUser = () => dispatch => {
  localStorage.removeItem('jwtToken')
  localStorage.removeItem('user')
  dispatch({type: 'LOG_OUT_USER', payload: ''})
}
