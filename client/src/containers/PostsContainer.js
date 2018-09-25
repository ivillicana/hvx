import React, {Component} from 'react'
import {connect} from 'react-redux'
import PostForm from '../components/neighborhood/PostForm'
import {fetchPosts} from '../actions/postActions'

class PostsContainer extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }
  render(){
    return(
      <div>
      <PostForm />
      {this.props.posts.map((p,i) => {
        return (
          <li key={i}>
            <span>{p.title}</span> - <span>{p.content}</span>
          </li>
        )
      })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})
export default connect(mapStateToProps, {fetchPosts})(PostsContainer)