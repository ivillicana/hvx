import React, {Component} from 'react'
import Header from '../components/Header'
import PostsContainer from './PostsContainer'

class Neighborhood extends Component {

  render(){
    const title = "Neighborhood Talk"
    const briefSummary = "Wanting to know what is going on in your Hudson Valley neighborhood? Or you'd like to let others know about this great new restaurant in the HV? Be a Hudson Valley Xplorer and post it in Neighborhood Talk!"
    return(
      <div className="container bg" >

        <div className="row">
          <div className="col-md-12">
            <Header 
            title={title}
            briefSummary={briefSummary}/>          
          </div>
        </div>

      </div>
    )
  }
}

export default Neighborhood