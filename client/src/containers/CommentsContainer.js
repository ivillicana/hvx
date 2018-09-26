import React, {Component} from 'react'
import CommentShow from '../components/neighborhood/CommentShow'
import CommentForm from '../components/neighborhood/CommentForm';
import '../components/neighborhood/neighborhood.css'

class CommentsContainer extends Component {

  render(){
    const comments = this.props.comments
    return(
      <div className="row">
          <div className="col-md-12">
            <h4 className="mb-3 text-center">Comments</h4>
            {comments && 
              comments.map(comment =>{
                return <CommentShow key={comment.id} comment={comment}/>
              })
            }
            <CommentForm key={this.props.postId} postId={this.props.postId} createNewComment={this.props.createNewComment} />
          </div>
        </div>
    )
  }
}

export default CommentsContainer