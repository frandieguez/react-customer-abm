import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Delete, Edit } from '@material-ui/icons';

const CustomerListItem = ({customer, editAction, delAction, baseUrl}) => {

  return (
    <div className="customer-list-item">
      <div className="field">
        <Link to={`${baseUrl}/${customer.dni}`}>{customer.name}</Link>
      </div>
      <div className="field">
        <Link to={`${baseUrl}/${customer.dni}`}><Edit /></Link>
      </div>
      <div className="field">
        <Link to={`${baseUrl}/${customer.dni}/delete`}><Delete /></Link>
      </div>
    </div>
  )
}

CustomerListItem.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
  }).isRequired
}

export default CustomerListItem
