import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = (value) => (
  !value && 'This fiedl is required'
)

const MyField = ({ input, meta }) => (
  <div>
    <input {...input} type="text"/>
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
        <div>
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            component={MyField}
            type="text"
            validate={isRequired}
          />
        </div>
        <div>
          <label htmlFor="dni">DNI</label>
          <Field
            name="dni"
            component={MyField}
            type="text"
            validate={isRequired}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Field name="age" component="input" type="number"></Field>
        </div>
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
