import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Breakfast extends Component {
  formattedRestaurants () {
    return this.props.restaurants.map(restaurant => {
      /*const location = `${restaurant.location.address1}, ${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`*/

      return <Link key={restaurant.id} to={`eat-drink/${restaurant.id}`}><span className="list-group-item list-group-item-action flex-column align-items-start" role="tab" >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-2 font-weight-bold">{restaurant.name}</h5>
          </div>
          {/*<img style={{height: 150, width: '100%', maxWidth: 200, display: 'block'}} src={restaurant.image_url} alt={restaurant.name}></img>
          <small>{location}</small>*/}
          </span>
        </Link>
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