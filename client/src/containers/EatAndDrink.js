import React, { Component }from "react";
import {connect} from 'react-redux'

import Header from '../components/Header'
import Breakfast from '../components/eatAndDrink/Breakfast'
import Dinner from '../components/eatAndDrink/Dinner'
import Drinks from '../components/eatAndDrink/Drinks'

import {fetchBreakfastItems} from '../actions/eatAndDrinkActions'
import {fetchDinnerItems} from '../actions/eatAndDrinkActions'
import {fetchDrinksItems} from '../actions/eatAndDrinkActions'

class EatAndDrink extends Component {
  componentDidMount(){
    this.props.fetchBreakfastItems()
    this.props.fetchDinnerItems()
    this.props.fetchDrinksItems()
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
          <div className="col-md-4">
          <h2>Breakfast & Brunch</h2>
            <Breakfast restaurants={this.props.breakfastRestaurants}/>
          </div>
          
          <div className="col-md-4">
          <h2>Dinner</h2>
          <Dinner restaurants={this.props.dinnerRestaurants}/>
          </div>

          <div className="col-md-4">
          <h2>Drinks</h2>
          <Drinks restaurants={this.props.drinksRestaurants}/>
          </div>
        </div>
        
      </div>
    )
  }
}
const mapStateToProps = state => ({
  breakfastRestaurants: state.restaurants.breakfast,
  dinnerRestaurants: state.restaurants.dinner,
  drinksRestaurants: state.restaurants.drinks,
});

export default connect(mapStateToProps, {fetchBreakfastItems, fetchDinnerItems, fetchDrinksItems})(EatAndDrink)