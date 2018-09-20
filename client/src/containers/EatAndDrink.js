import React, { Component }from "react";
import {connect} from 'react-redux'
import Header from '../components/Header'
import Breakfast from '../components/eatAndDrink/Breakfast'
import Dinner from '../components/eatAndDrink/Dinner'

import {fetchBreakfastItems} from '../actions/eatAndDrinkActions'
import {fetchDinnerItems} from '../actions/eatAndDrinkActions'

class EatAndDrink extends Component {
  componentDidMount(){
    this.props.fetchBreakfastItems()
    this.props.fetchDinnerItems()
  }

  render(){
    const title = "Eat & Drink"
    const briefSummary = "Looking for a place to eat or enjoy a drink while in the Hudson Valley?"

    return(
      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <Header 
            title={title}
            briefSummary={briefSummary}/>          
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6">
          <h2>Breakfast & Brunch</h2>
            <Breakfast restaurants={this.props.breakfastRestaurants}/>
          </div>
          
          <div className="col-md-6">
          <h2>Dinner</h2>
          <Dinner restaurants={this.props.dinnerRestaurants}/>
          </div>
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  breakfastRestaurants: state.restaurants.breakfast,
  dinnerRestaurants: state.restaurants.dinner
});

export default connect(mapStateToProps, {fetchBreakfastItems, fetchDinnerItems})(EatAndDrink)