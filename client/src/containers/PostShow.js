import React, {Component} from 'react'
import CommentsContainer from './CommentsContainer'

class PostShow extends Component {

  render(){
    const foundPost = this.props.location.state.post
    return(
      <React.Fragment>
        <div className="container bg-primary rounded text-white pt-3 mb-4">
          <div className="row">
            <div className="col-md-12">
              <h2>{foundPost.title}</h2>
              <p><small>Posted by: {foundPost.user.name}</small></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>{foundPost.content}</p>
            </div>
          </div>
        </div>

        <div className="container border border-primary rounded p-5">
            {foundPost.comments && 
              <CommentsContainer comments={foundPost.comments}/>
            }
        </div>
      </React.Fragment>
    )
  }
}
export default PostShow