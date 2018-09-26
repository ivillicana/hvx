import React, {Component} from 'react'
import CommentsContainer from './CommentsContainer'
import {connect} from 'react-redux'
import {createNewComment, fetchPosts, fetchPost} from '../actions/postActions'
import '../components/neighborhood/neighborhood.css'

class PostShow extends Component {

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchPost(this.props.match.params.id);
  }

  render(){
    const foundPost = this.props.post
    return(
      <React.Fragment>
        {foundPost &&
          <React.Fragment>
          <div className="container rounded text-white pt-3 mb-4 post-container">
            <div className="row">
              <div className="col-md-12">
                <h2>{foundPost.title}</h2>
                <p><small>—{foundPost.user.name} ({foundPost.user.location})</small></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>{foundPost.content}</p>
              </div>
            </div>
          </div>

          <div className="container rounded p-5 comment-container">
              {foundPost.comments && 
                <CommentsContainer postId={foundPost.id} comments={foundPost.comments} createNewComment={this.props.createNewComment}/>
              }
          </div>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, {createNewComment, fetchPosts, fetchPost})(PostShow)