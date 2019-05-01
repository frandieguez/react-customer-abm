import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/fetchCustomers';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomerActions';

class CustomersContainer extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

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
        <button onClick={this.props.history.goBack}>Go back</button>
      </CustomerActions>
    </React.Fragment>
  }

  render() {
    return (
      <div>
        <AppFrame header='Customers listing' body={this.renderBody(this.props.customers)} />
      </div>
    );
  }
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
  customers: [
    { name: 'Alan Moore', age: 34, dni: '123566X'},
    { name: 'John Doe', age: 33, dni: '234234234Z'},
    { name: 'Susan Page', age: 36, dni: '342342Y'}
  ]
}

const mapDispatchToProps = { fetchCustomers }

export default withRouter(connect(null, mapDispatchToProps)(CustomersContainer));
