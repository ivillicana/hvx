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