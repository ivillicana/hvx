import React, {Component} from 'react'

class Museums extends Component {
  formattedMuseums () {
    return this.props.museums.map(museum => {
      const location = `${museum.location.address}, ${museum.location.city}, ${museum.location.state} ${museum.location.postalCode}`

      return <a className="list-group-item list-group-item-action flex-column align-items-start" role="tab" key={museum.id}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-2 font-weight-bold">{museum.name}</h5>
          </div>
          {/*<img style={{height: 150, width: '100%', maxWidth: 200, display: 'block'}} src={museum.image_url} alt={museum.name}></img>*/}
          <small>{location}</small>
        </a>
    })
  }

  render(){

    return (
      <div className="list-group" id="list-tab" role="tablist">
        {this.formattedMuseums()}
      </div>
    )
  }
}


export default Museums