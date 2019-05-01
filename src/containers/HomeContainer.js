import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';
import PropTypes from 'prop-types';

class HomeContainer extends Component {

  render() {
    return (
      <div>
        <AppFrame header='Home' body={
          <div>
            <p>This is the initial display</p>

            <CustomerActions>
              <button onClick={() => this.props.history.push('/customers')}>Customer listing</button>
            </CustomerActions>
          </div>
        }>
        </AppFrame>
      </div>
    );
  }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);
