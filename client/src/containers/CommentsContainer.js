import React, {Component} from 'react'
import CommentShow from '../components/neighborhood/CommentShow'
import CommentForm from '../components/neighborhood/CommentForm';

class CommentsContainer extends Component {

  render(){
    const comments = this.props.comments
    return(
      <div className="row">
          <div className="col-md-12">
            <h4>Comments</h4>
            {comments && 
              comments.map(comment =>{
                return <CommentShow key={comment.id} comment={comment}/>
              })
            }
            <CommentForm />
          </div>
        </div>
    )
  }
}

export default CommentsContainer