import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomerActions';

import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {

  componentDidMount() {
    this.props.fetchCustomers();
  }

  renderBody = (customers) => {
    return <React.Fragment>
      <CustomerList
        customers={customers}
        urlPath={'/customers'}
        />
      <CustomerActions>
        <button onClick={() => this.props.history.push('/customers/new')}>New customer</button>
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
  customers: []
}

const mapStateToProps = state => ({
  customers: getCustomers(state)
});
const mapDispatchToProps = { fetchCustomers }

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomersContainer)
);
