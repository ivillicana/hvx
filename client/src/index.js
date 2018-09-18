import 'bootswatch/dist/united/bootstrap.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import LogIn from './components/LogIn';
import NavBar from './containers/NavBar'
import Footer from './containers/Footer'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      <Footer />
    </React.Fragment>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();
