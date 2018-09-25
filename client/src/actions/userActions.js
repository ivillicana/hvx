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
    debugger;
    localStorage.setItem('jwtToken', token.auth_token)
    
  })
}
