export const fetchMuseums = () => dispatch => {
  fetch('/activities/museums')
    .then(res => res.json())
    .then(museums => dispatch({
      type: 'FETCH_MUSEUMS',
      payload: museums
    }))
}

export const fetchPerformingArts = () => dispatch => {
  fetch('/activities/performing-arts')
    .then(res => res.json())
    .then(pa => dispatch({
      type: 'FETCH_PERFORMING_ARTS',
      payload: pa
    }))
}

export const fetchNature= () => dispatch => {
  fetch('/activities/nature')
    .then(res => res.json())
    .then(centers => dispatch({
      type: 'FETCH_NATURE',
      payload: centers
    }))
}