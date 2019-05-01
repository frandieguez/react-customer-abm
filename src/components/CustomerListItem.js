import React from 'react'
import PropTypes from 'prop-types'

const CustomerListItem = ({customer, editAction, delAction, baseUrl}) => {

  return (
    <div>
      <div className="customer-list-item">
        <div className="field">
          <Link to={`${baseUrl}/${customer.dni}`}>{customer.name}</Link>
        </div>
        <div className="field">
          <Link to={`${baseUrl}/${customer.dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${baseUrl}/${customer.dni}/delete`}>{delAction}</Link>
        </div>
      </div>
    </div>
  )
}

CustomerListItem.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
  }).isRequired,,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
}

export default CustomerListItem
