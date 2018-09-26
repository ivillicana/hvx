import React from 'react'

const PostComponent = props => {
  const commentCount = props.post.comments.length
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header" id={`heading${props.post.id}`}>
          <h5 className="mb-0 d-flex justify-content-between align-items-center">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${props.post.id}`} aria-expanded="true" aria-controls="collapseOne">
              {props.post.title}
            </button>
            <button onClick={() => props.loadPostAndComments(props.post.id)} className="badge badge-primary badge-pill btn-link btn">Comments: {commentCount}</button>
          </h5>
        </div>

        <div id={`collapse${props.post.id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            {props.post.content}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default PostComponent