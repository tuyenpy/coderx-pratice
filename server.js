// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
//bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const todos = [
  'Đi chợ',
  'Nấu cơm',
  'Rửa chén',
  'Học code tại CoderX'
];
// Pug template engine
app.set('views', './views');
app.set('view engine', 'pug');

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

//get todo
app.get('/todos', (req, res) => {
  let q = req.query.q;
  let match = q && todos.filter(element => 
    element.toLowerCase().indexOf(q.toLowerCase()) !== -1? true: false                          
  );
  res.render('./todos', {
    todos: match||todos
  });
});
//create todo
app.post('/todos/create', (req, res) => {
    let todo = req.body.todo;
  console.log(todo);
    if (todo) {
      todos.push(todo);
    }
    res.redirect('/todos');
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
