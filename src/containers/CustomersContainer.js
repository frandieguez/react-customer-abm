import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomerActions';

const customers = [
  { name: 'Alan Moore', age: 34, dni: '123566X'},
  { name: 'John Doe', age: 33, dni: '234234234Z'},
  { name: 'Susan Page', age: 36, dni: '342342Y'}
]
class CustomersContainer extends Component {

  handleAddNew = () => {
    this.props.history.push('/customers/new');
  }

  renderBody = (customers) => {
    return <React.Fragment>
      <CustomerList
        customers={customers}
        urlPath={'/customers'}
        />
      <CustomerActions>
        <button onClick={this.handleAddNew}>New customer</button>
        <button onClick={this.props.history.back}>Go back</button>
      </CustomerActions>
    </React.Fragment>
  }

  render() {
    return (
      <div>
        <AppFrame header='Customers listing' body={this.renderBody(customers)} />
      </div>
    );
  }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);
