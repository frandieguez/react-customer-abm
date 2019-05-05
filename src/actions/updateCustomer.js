
import { UPDATE_CUSTOMER } from './../constants';
import { apiPut } from '../api';
import { createAction } from 'redux-actions';

export const updateCustomer = createAction(
  UPDATE_CUSTOMER,
  (id, customer) => apiPut(id, customer)
)
