import React from 'react'

const CommentShow = props => {
  return(
  <div className="row">
    <div className="col-md-5">
      {props.comment.content}
      {props.comment.user_name && 
      <p><small className="text-muted">—{props.comment.user_name} ({props.comment.user_location})</small></p>
      }
    </div>
  </div>
)}

export default CommentShow