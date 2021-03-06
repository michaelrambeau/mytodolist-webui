import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import todosSample from "../../../api/todos/mock/todos.json";
import List from "./index";
import createTodosApi from "../../../api/todos/mock/todos-api";

const history = createMemoryHistory();
const api = createTodosApi({ delay: 0 });

const styles = { maxWidth: 800, margin: "0 auto" };

storiesOf("Todo List", module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add("Empty List", () => (
    <Router history={history}>
      <List todos={[]} />
    </Router>
  ))
  .add("Basic List", () => {
    return (
      <Router history={history}>
        <List todos={todosSample} />
      </Router>
    );
  });
