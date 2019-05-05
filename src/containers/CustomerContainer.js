import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame';
import CustomerData from '../components/CustomerData';
import PropTypes from 'prop-types';
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import { fetchCustomers } from '../actions/fetchCustomers';

class CustomerContainer extends Component {

  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  handleSubmit = values => {
    console.log(JSON.stringify(values));
  }

  renderBody = () => {
    return <React.Fragment>
      <Route path="/customers/:dni/edit" children={
        ( { match } ) => {
          const CustomerControl = match ? CustomerEdit : CustomerData;

          return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit} goBack={this.props.history.goBack} />
        }
      }></Route>
    </React.Fragment>
  }

  render() {
    return (
      <div>
        <AppFrame
          header={`Customer data for ${this.props.dni}`}
          body={this.renderBody()}
          />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object,
  fetchCustomers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state, props)
})

export default withRouter(connect(mapStateToProps, {
  fetchCustomers
})(CustomerContainer));
