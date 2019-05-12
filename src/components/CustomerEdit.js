import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';

const isRequired = (value) => (
  !value && 'This fiedl is required'
)
const isNumber = (value) => (
  isNaN(Number(value)) && "The field must be a number"
)

const validate = values => {
  const error = {};

  if (!values.name) {
    error.name = 'The name is required';
  }

  if (!values.dni) {
    error.dni = 'The dni is required'
  }

  return error;
}

const MyField = ({ input, meta, type, label, name }) => (
  <div className="myfield">
    <label htmlFor={name}>{label}</label>
    <input name={name} {...input} type={!type ? "text" : type} />
    {
      meta.error && meta.touched && <span>{meta.error}</span>
    }
  </div>
);

const toNumber = value => value && Number(value)
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const limitNumbers = (value, previousValue, values) =>
    value (value < 100 ? value : previousValue);

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, goBack}) => {
  return (
    <div>
      <h2>Customer editing</h2>

      <form onSubmit={handleSubmit}>
        <Field
          label="Name"
          name="name"
          type="text"
          component={MyField}
          validate={isRequired}
          parse={toUpper}
          format={toLower}
        />
        <Field
          label="DNI"
          name="dni"
          component={MyField}
        />
        <Field
          label="Age"
          name="age"
          component={MyField}
          type="number"
          validate={isNumber}
          parse={toNumber}
          normalize={limitNumbers}
        />
        <CustomerActions>
          <button type="submit" disabled={submitting}>Submit</button>
          <button onClick={goBack}>Go back</button>
        </CustomerActions>
      </form>
    </div>
  )
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  goBack: PropTypes.func.isRequired,
}

const CustomerEditForm = reduxForm({
  form: 'CustomerEdit',
  validate
})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm);
