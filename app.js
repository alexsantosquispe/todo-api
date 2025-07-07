const express = require('express');
const crypto = require('node:crypto');
const todos = require('./todos.json');
const { validateTodo } = require('./schemas/todos.schema');

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
  const result = validateTodo(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const newTodo = {
    id: crypto.randomUUID(),
    ...result.data
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const result = validateTodo(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const todoIndex = todos.findIndex((item) => item.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  const updatedTodo = {
    ...todos[todoIndex],
    ...result.data
  };

  todos[todoIndex] = updatedTodo;

  return res.json(updatedTodo);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
