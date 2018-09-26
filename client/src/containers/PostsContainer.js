import React, {Component} from 'react'
import {connect} from 'react-redux'
import PostForm from '../components/neighborhood/PostForm'
import PostComponent from '../components/neighborhood/PostComponent'
import {fetchPosts, createNewPost} from '../actions/postActions'
import {withRouter} from 'react-router-dom'


class PostsContainer extends Component {

  loadPost(id){
    this.props.history.push(`/posts/${id}`, {post: this.props.posts.find(post => post.id === id)})
  }

  componentDidMount(){
    this.props.fetchPosts()
  }
  render(){
    return(
      <React.Fragment>
      <div className="row mb-4">
        <div className="col-md-12">
          <PostForm createNewPost={this.props.createNewPost}/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="accordion" id="accordion">
              {this.props.posts && 
                this.props.posts.map(post => {
                  return (
                    <PostComponent post={post} key={post.id} 
                    loadPostAndComments={this.loadPost.bind(this)}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state)=> ({
  posts: state.posts
})
export default withRouter(connect(mapStateToProps, {fetchPosts, createNewPost})(PostsContainer))