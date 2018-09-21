import React, { Component } from 'react';
import Header from '../components/Header'
import bg1 from '../images/hudson1.jpg'
import bg2 from '../images/hudson2.jpg'
import bg3 from '../images/hudson3.jpg'
import bg4 from '../images/hudson4.jpg'


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

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={bg1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={bg2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={bg3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={bg4} alt="Fourth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    );
  }
}

export default Home;
