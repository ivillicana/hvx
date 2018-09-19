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
      password_confirmation: userData.signUpPasswordConfirmation
    })
  })
  .then(response => response.json())
  .then(user => {
    dispatch({type: 'CREATE_USER', payload: user})
  })
}

