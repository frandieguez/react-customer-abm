import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';
import CustomerActions from '../components/CustomerActions';

class CustomerContainer extends Component {
  renderBody = (customer) => {
    return <React.Fragment>
      <CustomerActions>
        <button onClick={this.props.history.goBack}>Go back</button>
      </CustomerActions>
    </React.Fragment>
  }

  render() {
    return (
      <div>
        <AppFrame header={`Customer ${this.props.dni}`} body={this.renderBody(this.props.dni)} />
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
};

CustomerContainer.defaultTypes = {
  dni: '',
};

export default withRouter(connect(null, null)(CustomerContainer));

