import React, {Component} from 'react'
import PerformingArtsShow from './PerformingArtsShow';

class PerformingArts extends Component {
  formattedPerformingArts () {
    return this.props.centers.map(center => <PerformingArtsShow key={center.id} center={center}/>)
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