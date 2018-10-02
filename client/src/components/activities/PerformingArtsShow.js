import React, {Component} from 'react'

class PerformingArtsShow extends Component {
  state = {
    likes: 0
  }

  handleLikes () {
    console.log('liked')
    this.setState(prevState => {
      return {likes: prevState.likes+1}
    })
  }

  render(){
    const center = this.props.center
    const location = `${center.location.city}, ${center.location.state}`
    return(
      <a className="list-group-item list-group-item-action flex-column align-items-start" role="tab" key={center.id}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-2 font-weight-bold">{center.name}</h5>
          </div>
          {/*<img style={{height: 150, width: '100%', maxWidth: 200, display: 'block'}} src={center.image_url} alt={center.name}></img>*/}
          <small>{location}</small>
          {/* <button onClick={this.handleLikes.bind(this)}>Like</button> */}
          {/* <small>{this.state.likes}</small> */}
        </a>
    )
  }
}

export default PerformingArtsShow