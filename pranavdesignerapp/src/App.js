import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './component/Header/Header.js';
import Footer from './component/Footer/Footer.js';

import HomePage from './component/HomePage/HomePage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route path="/">
              <HomePage />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
