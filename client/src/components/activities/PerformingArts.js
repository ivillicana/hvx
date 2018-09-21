import React, {Component} from 'react'

class PerformingArts extends Component {
  formattedPerformingArts () {
    return this.props.centers.map(center => {
      const location = `${center.location.address}, ${center.location.city}, ${center.location.state} ${center.location.postalCode}`

      return <a className="list-group-item list-group-item-action flex-column align-items-start" role="tab" key={center.id}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-2 font-weight-bold">{center.name}</h5>
          </div>
          {/*<img style={{height: 150, width: '100%', maxWidth: 200, display: 'block'}} src={center.image_url} alt={center.name}></img>*/}
          <small>{location}</small>
        </a>
    })
  }

  render(){

    return (
      <div className="list-group" id="list-tab" role="tablist">
        {this.formattedPerformingArts()}
      </div>
    )
  }
}


export default PerformingArts