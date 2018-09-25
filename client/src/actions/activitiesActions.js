export const fetchMuseums = () => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/activities/museums', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(res => res.json())
    .then(museums => dispatch({
      type: 'FETCH_MUSEUMS',
      payload: museums
    }))
}

export const fetchPerformingArts = () => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/activities/performing-arts', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(res => res.json())
    .then(pa => dispatch({
      type: 'FETCH_PERFORMING_ARTS',
      payload: pa
    }))
}

export const fetchNature= () => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/activities/nature', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
    .then(res => res.json())
    .then(centers => dispatch({
      type: 'FETCH_NATURE',
      payload: centers
    }))
}