import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRestaurant} from '../../actions/eatAndDrinkActions'

import zero from '../../images/yelpStars/zero.png'
import one from '../../images/yelpStars/one.png'
import oneHalf from '../../images/yelpStars/oneHalf.png'
import two from '../../images/yelpStars/two.png'
import twoHalf from '../../images/yelpStars/twoHalf.png'
import three from '../../images/yelpStars/three.png'
import threeHalf from '../../images/yelpStars/threeHalf.png'
import four from '../../images/yelpStars/four.png'
import fourHalf from '../../images/yelpStars/fourHalf.png'
import five from '../../images/yelpStars/five.png'

class RestaurantContainer extends Component {

  componentDidMount(){
    this.props.fetchRestaurant(this.props.match.params.restaurantId)
  }

  render(){
    const rest = this.props.restaurant
    let starRating;
    switch (rest.rating) {
      case 0:
        starRating = <img alt="rating" src={zero} />
        break;
      case 1:
        starRating = <img alt="rating" src={one} />
        break;
      case 1.5:
        starRating = <img alt="rating" src={oneHalf} />
        break;
      case 2:
        starRating = <img alt="rating" src={two} />
        break;
      case 2.5:
        starRating = <img alt="rating" src={twoHalf} />
        break;
      case 3:
        starRating = <img alt="rating" src={three} />
        break;
      case 3.5:
        starRating = <img alt="rating" src={threeHalf} />
        break;
      case 4:
        starRating = <img alt="rating" src={four} />
        break;
      case 4.5:
        starRating = <img alt="rating" src={fourHalf} />
        break;
      case 5:
        starRating = <img alt="rating" src={five} />
        break;
      default:
        break;
    }
    
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
              <div className="mb-3">
                <p> {starRating}</p>
              </div>
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