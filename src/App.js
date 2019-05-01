import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Root</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/customers/3000">Customers 3000</Link>
          </li>
        </ul>
      </div>
      </Router>
    );
  }
}

export default App;
