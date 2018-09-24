import React, {Component}from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'
import Museums from '../components/activities/Museums'
import PerformingArts from '../components/activities/PerformingArts'
import Nature from '../components/activities/Nature'

import {fetchMuseums, fetchPerformingArts, fetchNature} from '../actions/activitiesActions'

class Activities extends Component {
  componentDidMount(){
    this.props.fetchMuseums()
    this.props.fetchPerformingArts()
    this.props.fetchNature()
  }
  render(){
    const title = "Things To Do"
    const briefSummary = "New York's Hudson Valley is filled with things to do"
    return(
      <div className="container" >

        <div className="row" >
          <div className="col-md-12">
            <Header 
            title={title}
            briefSummary={briefSummary}
            />          
          </div>
        </div>

        <div className="row">

          <div className="col-md-4">
            <h2>Museums</h2>
            <Museums museums={this.props.museums}/>
          </div>
          
          <div className="col-md-4">
            <h2>Performing Arts</h2>
            <PerformingArts centers={this.props.performingArts} />
          </div>

          <div className="col-md-4">
            <h2>Parks & Nature</h2>
            <Nature centers={this.props.nature} />
          </div>
        </div>
        

      </div>
    )
  }
}

const mapStateToProps = state => ({
  museums: state.activities.museums,
  performingArts: state.activities.performingArts,
  nature: state.activities.nature,
})

export default connect(mapStateToProps, {fetchMuseums, fetchPerformingArts, fetchNature})(Activities)