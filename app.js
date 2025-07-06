const express = require('express');
const crypto = require('node:crypto');
const todos = require('./todos.json');

const app = express();
//MIddleware to handle JSON requests
app.use(express.json());
app.disable('x-powered-by');

app.get('/todos', (req, res) => {
  const { status } = req.query;

  if (status) {
    const todosFiltered = todos.filter(
      (item) => item.status.toLowerCase() === status.toLowerCase()
    );
    return res.json(todosFiltered);
  }
  return res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find((item) => item.id === id);
  if (todo) return res.json(todo);
  return res.status(404).json({ message: 'Todo not found' });
});

app.post('/todos', (req, res) => {
  const { description, status } = req.body;

  if (!description || !status) {
    return res.status(400).json({ message: 'Missing description or status' });
  }

  const newTodo = {
    id: crypto.randomUUID(),
    description,
    status
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
