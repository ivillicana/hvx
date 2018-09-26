import React, {Component} from 'react'

class CommentForm extends Component {
  state = {
    content: '',
    post_id: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createNewPost(this.state)
    this.setState({content: '', post_id: ''})
  }

   render () {
     return(
       <div className="row">
        <div className="col-md-5">
          <form onSubmit={this.handleSubmit} id="comment-form" className="bg-light p-3 border border-primary rounded">
          <fieldset>
            <legend className="h5">Leave a comment</legend>

            <div className="form-group">
              <textarea form="comment-form" className="form-control" name="content" placeholder="What would you like to comment...?" value={this.state.content} onChange={this.handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
          </fieldset>
          </form>
        </div>
      </div>
     )
   }
}

export default CommentForm