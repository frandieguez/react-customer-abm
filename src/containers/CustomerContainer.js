import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame';
import CustomerData from '../components/CustomerData';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomerActions';
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';


class CustomerContainer extends Component {
  renderBody = (customer) => {

    return <React.Fragment>
      <Route path="/customers/:dni/edit" children={
        ( { match } ) => {
          const CustomerControl = match ? CustomerEdit : CustomerData;

          return <CustomerControl {...customer} />
        }
      }></Route>
      <CustomerActions>
        <button onClick={this.props.history.goBack}>Go back</button>
      </CustomerActions>
    </React.Fragment>

  }

  render() {

    // body={this.renderBody(this.props.customer)}
    return (
      <div>
        <AppFrame header={`Customer data for ${this.props.customer.name}`} body={this.renderBody(this.props.customer)} />
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
