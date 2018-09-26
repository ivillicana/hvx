import React, {Component} from 'react'

class CommentForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: '',
      postId: props.postId
    }
  }
  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createNewComment(this.state)
    this.setState({content: '', postId: ''})
  }

   render () {
     return(
       <div className="row mt-4">
        <div className="col-md-5">
          <form onSubmit={this.handleSubmit} id="comment-form" className="p-3 border border-info rounded">
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