import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame';
import CustomerData from '../components/CustomerData';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomerActions';
import { getCustomerByDni } from '../selectors/customers';

class CustomerContainer extends Component {
  renderBody = (customer) => {
    return <React.Fragment>
      <CustomerData
        key={customer.dni}
        dni={customer.dni}
        name={customer.name}
        age={customer.age}
        />

      <CustomerActions>
        <button onClick={this.props.history.goBack}>Go back</button>
      </CustomerActions>
    </React.Fragment>
  }

  render() {
    return (
      <div>
        <AppFrame header={`Customer ${this.props.customer.name}`} body={this.renderBody(this.props.customer)} />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state, props)
})

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));

