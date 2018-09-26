export const fetchPosts = () => dispatch =>{
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/posts', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
  .then(resp => resp.json())
  .then(postsData => dispatch({
    type: 'FETCH_POSTS',
    payload: postsData
  }))
  
}

export const createNewPost = (postData) => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch('/posts', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    },
    body: JSON.stringify({
      title: postData.title,
      content: postData.content
    })
  })
    .then(resp => resp.json())
    .then(post => dispatch({
      type: "CREATE_POST",
      payload: post
    }))
}