import React, { Component }from "react";
import {connect} from 'react-redux'

class EatAndDrink extends Component {
  render(){
    return(
      <div>
        This is the EatAndDrink Component
      </div>
    )
  }
}

export default connect()(EatAndDrink)