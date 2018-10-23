import React from "react";

import renderWithContext from "./render-with-context";
import createAuthApi from "../../api/auth/auth-api";
import createTodosApi from "../../api/todos/mock/todos-api";
import App from "../../App";

const storage = {
  get: key => window.localStorage.getItem(key),
  set: (key, value) => window.localStorage.setItem(key, value),
  delete: key => window.localStorage.removeItem(key)
};

export default function renderApp({ route, locale = "en" }) {
  const dependencies = {
    todosApi: createTodosApi({ delay: 0 }),
    authApi: createAuthApi({ delay: 0, storage })
  };
  return {
    ...renderWithContext(<App dependencies={dependencies} />, {
      route
    })
  };
}
