// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
const todos = [
  'Đi chợ',
  'Nấu cơm',
  'Rửa bát',
  'Học code tại CoderX'
];

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('<h1>I love CodersX</h1>');
});

//todo list
app.get('/todos', (req, res) => {
  let list = todos.map(element => `<li>${element}</li>`).join('');
  res.send('<ul>'+list+'</ul>');
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
