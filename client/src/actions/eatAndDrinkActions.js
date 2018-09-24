export const fetchBreakfastItems = () => dispatch => {
  fetch('/breakfast-and-brunch')
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: 'FETCH_BREAKFAST_RESTAURANTS',
      payload: restaurants
    }))
}

export const fetchDinnerItems = () => dispatch => {
  fetch('/dinner')
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: 'FETCH_DINNER_RESTAURANTS',
      payload: restaurants
    }))
}

export const fetchDrinksItems = () => dispatch => {
  fetch('/drinks')
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: 'FETCH_DRINKS_RESTAURANTS',
      payload: restaurants
    }))
}

export const fetchRestaurant = (id) => dispatch => {

  fetch(`/eat-drink/${id}`)
    .then(res => res.json())
    .then(restaurant => dispatch({
      type: 'FETCH_RESTAURANT',
      payload: restaurant
    }))
}
