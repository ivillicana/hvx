import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRestaurant} from '../../actions/eatAndDrinkActions'
import StarRatingComponent from './StarRating'



class RestaurantContainer extends Component {

  componentDidMount(){
    this.props.fetchRestaurant(this.props.match.params.restaurantId)
  }

  render(){
    const rest = this.props.restaurant
    
    return (
      
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          
            <h2>{rest.name}</h2>

            {rest.location ?
              <div>
                <ul className="list-unstyled">
                {rest.location.display_address.map((l, i) => <li key={i}>{l}</li>)}
                </ul> 
              </div>
            : null }

            {rest.rating ?
              <StarRatingComponent rating={rest.rating} /> 
            : null}
          
          </div>
        </div>
        <div className="row" style={{backgroundColor: '#ddd', paddingTop: 15, paddingBottom: 15}}>
          {rest.photos ?
            rest.photos.map((p,i) => {
              return (
                <div key={i} className="col-md-4">
                  <img
                  alt="restaurant" 
                  src={p}
                  style={{width: '100%'}}
                  className="img-responsive img-thumbnail"/>
                </div>)
            })
          : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurant: {...state.restaurants.restaurant}
});

export default connect(mapStateToProps, {fetchRestaurant})(RestaurantContainer)