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

export const fetchPost = postId => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch(`/posts/${postId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    }
  })
  .then(resp => resp.json())
  .then(post => dispatch({
    type: 'FETCH_POST',
    payload: post
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

export const createNewComment = commentData => dispatch => {
  const jwtToken = localStorage.getItem('jwtToken')
  fetch(`/posts/${commentData.postId}/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    },
    body: JSON.stringify({
      content: commentData.content
    })
  })
    .then(resp => resp.json())
    .then(post => dispatch({
      type: 'CREATE_COMMENT',
      payload: post
    }))
}