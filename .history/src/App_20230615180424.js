import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Switch } from 'react-router'

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Routes path="/">
            <Header />
            <Home />
          </Routes>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
