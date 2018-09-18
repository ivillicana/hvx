import 'bootswatch/dist/united/bootstrap.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { createStore } from 'redux';
import userReducer from './reducers/userReducer'

import Home from './containers/Home';
import LogIn from './containers/LogIn';
import NavBar from './containers/NavBar'
import Footer from './containers/Footer'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(userReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
