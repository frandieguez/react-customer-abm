import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = (value) => (
  !value && 'This fiedl is required'
)
const isNumber = (value) => (
  isNaN(Number(value)) && "The field must be a number"
)

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input name={name} {...input} type={!type ? "text" : type} />
    {
      meta.error && meta.touched && <span>{meta.error}</span>
    }
  </div>
);

const CustomerEdit = ({name, dni, age}) => {
  return (
    <div>
      <h2>Customer editing</h2>

      <form action="">
        <Field
          label="Name"
          name="name"
          component={MyField}
          validate={isRequired}
        />
        <Field
          label="DNI"
          name="dni"
          component={MyField}
          validate={[isRequired, isNumber ]}
        />
        <Field
          label="Age"
          name="age"
          component={MyField}
          type="number"
          validate={isNumber}
        />
      </form>
    </div>
  )
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
}

const CustomerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm);
