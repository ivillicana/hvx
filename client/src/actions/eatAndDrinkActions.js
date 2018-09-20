export const fetchBreakfastItems = () => dispatch => {
  fetch('/breakfast-and-brunch')
    .then(res => res.json())
    .then(restaurants => dispatch({
      type: 'FETCH_BREAKFAST_RESTAURANTS',
      payload: restaurants
    }))
}