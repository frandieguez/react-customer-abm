import React from 'react'
import PropTypes from 'prop-types'

const CustomerEdit = ({name, dni, age}) => {
  return (
    <div>
      <h2>Customer editing</h2>
      <h3>Name: {name}</h3>
      <h3>DNI:  {dni}</h3>
      <h3>Age:  {age}</h3>
    </div>
  )
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
}

export default CustomerEdit
