import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers = [
  { name: 'Fran', age: 34, dni: '77409320Z'},
  { name: 'Sonia', age: 33, dni: '76409320Z'},
  { name: 'Adrian', age: 36, dni: '35409320Z'}
];

export const fetchCustomers = createAction(
  FETCH_CUSTOMERS,
  () => customers
)
