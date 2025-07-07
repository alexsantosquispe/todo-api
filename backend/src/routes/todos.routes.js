import { Router } from 'express';
import { TodoController } from '../controllers/todo.controller.js';

export const todosRouter = Router();

todosRouter.get('/', TodoController.fetchTodos);
todosRouter.post('/', TodoController.addTodo);

todosRouter.get('/:id', TodoController.fetchTodoById);
todosRouter.put('/:id', TodoController.updateTodoById);
todosRouter.delete('/:id', TodoController.deleteTodoById);
