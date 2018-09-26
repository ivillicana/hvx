import React, {Component} from 'react'

class PostForm extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createNewPost(this.state)
    this.setState({title: '', content: ''})
  }

   render () {
     return(
       <div className="row">
        <div className="col-md-5">
          <form onSubmit={this.handleSubmit} id="post-form">
          <fieldset>
            <legend>New Post</legend>

            <div className="form-group">
              <input type="text" className="form-control" name="title" placeholder="Post Title" value={this.state.title} onChange={this.handleChange}/>
            </div>

            <div className="form-group">
              <textarea form="post-form" className="form-control" name="content" placeholder="What would you like to share...?" value={this.state.content} onChange={this.handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </fieldset>
          </form>
        </div>
      </div>
     )
   }
}

export default PostForm