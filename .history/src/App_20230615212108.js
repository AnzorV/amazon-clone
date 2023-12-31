import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/" component={withRouter(Home)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
