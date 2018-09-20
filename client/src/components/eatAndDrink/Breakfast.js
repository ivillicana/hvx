import React, {Component} from 'react'

class Breakfast extends Component {
  formattedRestaurants () {
    return this.props.restaurants.map(restaurant => {
      const location = `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`

      return <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" role="tab">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{restaurant.name}</h5>
            <small>{restaurant.location.city}</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
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


export default Breakfast