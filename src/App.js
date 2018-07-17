import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import './App.css';

class App extends Component {
  render(props) {
    return (
      <div className="App container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><NavLink to="/">Router</NavLink></li>
                <li className="active"><NavLink to="/">Home<span className="sr-only">(current)</span></NavLink></li>
                <li><NavLink to="/submit">Add A Route</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
