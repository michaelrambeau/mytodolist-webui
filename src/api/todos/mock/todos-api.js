// @flow
/**
 * API mock
 */
import data from "./todos.json";
import { randomDelay /*delayError*/ } from "../../utils";
import type { ToDoApi, ToDoFormData } from "../todos-types";

const createApi = (options: { delay: number }): ToDoApi => {
  const { delay } = options;
  let todos = data
    .slice()
    .map(item => ({ ...item, created_at: new Date(item.created_at) }));
  const findById = id => {
    return todos.find(todo => todo._id === id);
  };
  const send = data => randomDelay(data, delay);
  return {
    create(todo) {
      // Caution: it's not good to use `push` method because it mutates array!
      // but here we are mocking a distant API so it's OK.
      todos.push({
        ...todo,
        _id: Math.random()
          .toString()
          .slice(2),
        created_at: new Date()
      });
      return send(todos);
    },
    update(id: string, data: ToDoFormData) {
      todos = todos.map(
        todo =>
          id === todo._id ? { ...todo, ...data, updated_at: new Date() } : todo
      );
      return send(todos);
    },
    get(id) {
      const data = findById(id);
      return send({ data });
    },
    find(options?: { skip: number, limit: number }) {
      const { skip = 0, limit = 10 } = options || {};
      const total = todos.length;
      const foundTodos = todos.slice(skip, skip + limit);
      return send({ data: foundTodos, total, skip, limit });
    },
    remove(id: string) {
      todos = todos.filter(todo => todo._id !== id);
      return send({ status: "OK" });
    },
    count() {
      return send(todos.length);
    }
  };
};

export default createApi;
