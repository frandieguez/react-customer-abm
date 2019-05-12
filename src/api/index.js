const url = 'http://localhost:3001/';

export const apiFetchCustomers = () => fetch(`${url}customers`).then(v => v.json())

export const apiGet = (dni) => fetch(`${url}/customers/${dni}`).then(v => v.json())

export const apiPut = (id, customer) => {
  return fetch(`${url}customers/${id}`, {
    method: 'PUT',
    headers: new Headers({ 'Content-Type' : 'application/json'}),
    body: JSON.stringify(customer)
  }).then(v => v.json())
  .then(r => {
    if (r.error) {
      return Promise.reject(r.validation);
    }

    return r;
  })
}
