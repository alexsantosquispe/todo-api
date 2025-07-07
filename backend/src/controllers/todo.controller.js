import { TodoModel } from '../models/todo.model.js';
import { validateTodo } from '../schemas/todos.schema.js';

export class TodoController {
  static async fetchTodos(req, res) {
    const { status } = req.query;
    const todos = await TodoModel.fetchAll({ status });
    return res.json(todos);
  }

  static async fetchTodoById(req, res) {
    const { id } = req.params;
    const todo = await TodoModel.fetchById(id);
    if (todo) return res.json(todo);
    return res.status(404).json({ message: 'Todo not found' });
  }

  static async addTodo(req, res) {
    const result = validateTodo(req.body);
    if (!result.success)
      return res.status(400).json({ error: JSON.parse(result.error.message) });

    const newTodo = await TodoModel.create(result.data);
    return res.status(201).json(newTodo);
  }

  static async updateTodoById(req, res) {
    const result = validateTodo(req.body);
    if (!result.success)
      return res.status(400).json({ error: JSON.parse(result.error.message) });

    const { id } = req.params;
    const todoUpdated = await TodoModel.updateById({
      id,
      todo: result.data
    });
    if (!todoUpdated)
      return res.status(404).json({ message: 'Todo not found' });
    return res.json(todoUpdated);
  }

  static async deleteTodoById(req, res) {
    const { id } = req.params;
    const todoDeleted = await TodoModel.deleteById(id);
    if (!todoDeleted) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    return res.json({ message: 'Todo deleted' });
  }
}
