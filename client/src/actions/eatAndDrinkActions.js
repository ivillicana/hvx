export const fetchBreakfastItems = () => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/breakfast-and-brunch', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: 'FETCH_BREAKFAST_RESTAURANTS',
      payload: restaurants
    }))
}

export const fetchDinnerItems = () => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/dinner', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: 'FETCH_DINNER_RESTAURANTS',
      payload: restaurants
    }))
}

export const fetchDrinksItems = () => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/drinks', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: 'FETCH_DRINKS_RESTAURANTS',
      payload: restaurants
    }))
}

export const fetchRestaurant = (id) => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch(`/eat-drink/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(res => res.json())
    .then(restaurant => dispatch({
      type: 'FETCH_RESTAURANT',
      payload: restaurant
    }))
}
