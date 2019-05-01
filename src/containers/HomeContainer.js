import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';
import PropTypes from 'prop-types';

class HomeContainer extends Component {

  handleOnClick = () => {
    // the prop history is always injected by the Route Component
    this.props.history.push('/customers');
  }

  render() {
    return (
      <div>
        <AppFrame header='Home' body={
          <div>
            <p>This is the initial display</p>

            <CustomerActions>
              <button onClick={this.handleOnClick}>Customer listing</button>
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
