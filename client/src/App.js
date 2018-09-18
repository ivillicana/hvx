import React, { Component } from 'react';
import NavBar from './containers/NavBar'
import Footer from './containers/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
