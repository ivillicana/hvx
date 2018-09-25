import 'bootswatch/dist/united/bootstrap.css'

import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'

import Home from './containers/Home';
import NavBar from './containers/NavBar'
import Footer from './containers/Footer'
import Activities from './containers/Activities'
import EatAndDrink from './containers/EatAndDrink'
import LogIn from './containers/LogIn'
import Neighborhood from './containers/Neighborhood'

import store from './store'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/activities" component={Activities}/>
        <Route exact path="/eat-drink" component={EatAndDrink}/>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/neighborhood" component={Neighborhood} />
        <Route component={Footer} />
      </React.Fragment>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
