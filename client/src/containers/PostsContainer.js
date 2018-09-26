import React, {Component} from 'react'
import {connect} from 'react-redux'
import PostForm from '../components/neighborhood/PostForm'
import PostComponent from '../components/neighborhood/PostComponent'
import {fetchPosts} from '../actions/postActions'

class PostsContainer extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }
  render(){
    return(
      <React.Fragment>
      <div className="row mb-4">
        <div className="col-md-12">
          <PostForm />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="accordion" id="accordion">
              {this.props.posts && 
                this.props.posts.map(post => {
                  return (
                    <PostComponent post={post} key={post.id}/>
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

const mapStateToProps = state => ({
  posts: state.posts
})
export default connect(mapStateToProps, {fetchPosts})(PostsContainer)