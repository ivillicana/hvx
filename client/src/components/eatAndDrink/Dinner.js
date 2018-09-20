import React, {Component} from 'react'

class Dinner extends Component {
  formattedRestaurants () {
    return this.props.restaurants.map(restaurant => {
      const location = `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`

      return <a href={restaurant.url} target="_blank" className="list-group-item list-group-item-action flex-column align-items-start" role="tab" key={restaurant.id}>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-2 font-weight-bold">{restaurant.name}</h5>
            
          </div>
          <img style={{height: 150, width: '100%', maxWidth: 200, display: 'block'}} src={restaurant.image_url} alt={restaurant.name}></img>
          <small>{location}</small>
        </a>
    })
  }

  render(){

    return (
      <div className="list-group" id="list-tab" role="tablist">
        {this.formattedRestaurants()}
      </div>
    )
  }
}


export default Dinner