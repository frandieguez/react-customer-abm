import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiFetchCustomers } from '../api';

export const fetchCustomers = createAction(
  FETCH_CUSTOMERS,
  apiFetchCustomers
)
