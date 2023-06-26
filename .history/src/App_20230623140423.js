/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
        console.log('THE USER IS >>>', authUser);

        if (authUser) {

          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <h1>I am the payment</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
