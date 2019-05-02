const url = 'http://localhost:3001/';

export const apiFetchCustomers = () => fetch(`${url}customers`).then(v => v.json())

export const apiGet = (dni) => fetch(`${url}/customers/${dni}`).then(v => v.json())
