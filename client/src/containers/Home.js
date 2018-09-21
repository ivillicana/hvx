import React, { Component } from 'react';
import Header from '../components/Header'
import Background from '../images/hudson_valley.jpg';


class Home extends Component {
  render() {
    const title = "Hudson Valley Xplorer"
    const briefSummary = "Welcome to Hudson Valley Xplorer - Live The Valley"
    return (
      <div className="container bg" >

        <div className="row">
          <div className="col-md-12">
            <Header 
            title={title}
            briefSummary={briefSummary}/>          
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
