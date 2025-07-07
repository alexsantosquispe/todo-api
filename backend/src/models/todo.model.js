import todosMock from '../todos.json' with { type: 'json' };

export class TodoModel {
  static async fetchAll({ status }) {
    if (status) {
      return todosMock.filter(
        (todo) => todo.status.toLowerCase() === status.toLowerCase()
      );
    }
    return todosMock;
  }

  static async fetchById(id) {
    if (!id) return;
    return todosMock.find((todo) => todo.id === id);
  }

  static async create(todo) {
    const newTodo = {
      id: crypto.randomUUID(),
      ...todo
    };
    todosMock.push(newTodo);
    return newTodo;
  }

  static async updateById({ id, todo }) {
    const todoIndex = todosMock.findIndex((item) => item.id === id);
    if (todoIndex === -1) return false;

    const updatedTodo = {
      ...todosMock[todoIndex],
      ...todo
    };

    todosMock[todoIndex] = updatedTodo;
    return updatedTodo;
  }

  static async deleteById(id) {
    const todoIndex = todosMock.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) return false;

    todosMock.splice(todoIndex, 1);
    return true;
  }
}
