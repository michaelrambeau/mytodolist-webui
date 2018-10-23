import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import createTodosApi from "./api/todos/mock/todos-api";
import createRestApi from "./api/todos/todos-rest-api";
import createAuthApi from "./api/auth/auth-api";
import App from "./App";

const storage = {
  get: key => window.localStorage.getItem(key),
  set: (key, value) => window.localStorage.setItem(key, value),
  delete: key => window.localStorage.removeItem(key)
};

const useMockAPI = process.env.REACT_APP_API === "MOCK";

const dependencies = {
  todosApi: useMockAPI
    ? createTodosApi({ delay: 200 })
    : createRestApi({ rootUrl: "https://todo-api-v0.now.sh/todos" }),
  authApi: createAuthApi({ delay: 1000, storage })
};

render(
  <Router>
    <App dependencies={dependencies} />
  </Router>,
  document.getElementById("root")
);
