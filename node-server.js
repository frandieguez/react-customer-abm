const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.listen(3001, () => {
  console.log('JSON server is running');
});

server.put('/customers/12312314X', (req, res) => {
  let body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = JSON.parse(Buffer.concat(body).toString());
    console.log(JSON.stringify(body));

    if (body.age && body.age > 18) {
      console.log('Error de validacion');
      return res.send({
        error: true,
        validation: {
          age: 'Debe ser menor de edad'
        }
      });
    } else {
      res.send('ok');
    }
  })
});
