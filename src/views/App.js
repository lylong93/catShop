import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

// import App from '../router.js'

import Home from '../views/home'
import Test from '../views/test'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/test" component={Test}/>
      </div>
    );
  }
}

export default App;
