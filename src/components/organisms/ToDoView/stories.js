import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import todosSample from "../../../api/todos/mock/todos.json";
import TodoView from "./index";
const history = createMemoryHistory();

const styles = { maxWidth: 800, margin: "0 auto" };

storiesOf("Todo View", module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add("View a Todo item (never updated)", () => {
    return (
      <Router history={history}>
        <TodoView todo={todosSample[0]} onDelete={action("onDelete")} />
      </Router>
    );
  })
  .add("View a Todo item (updated)", () => {
    return (
      <Router history={history}>
        <TodoView todo={todosSample[1]} onDelete={action("onDelete")} />
      </Router>
    );
  });
