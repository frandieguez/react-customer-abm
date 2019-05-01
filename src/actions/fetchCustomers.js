import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
  { name: 'Alan Moore', age: 34, dni: '123566X'},
  { name: 'John Doe', age: 33, dni: '234234234Z'},
  { name: 'Susan Page', age: 36, dni: '342342Y'}
];

export const fetchCustomers = createAction(
  FETCH_CUSTOMERS,
  () => customers
)
