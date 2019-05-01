import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {

  renderCustomerContainer = () => <h1>Customer Container</h1>

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            <Route exact path="/customers/:dni" component={this.renderCustomerContainer} />
            <Route path="/customers/new" component={this.renderCustomerNewContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
