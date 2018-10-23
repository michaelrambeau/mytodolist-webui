import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import List from "./index";
const todos = [];
// import todos from "../../api/todos/players.json";

const history = createMemoryHistory();

const styles = { maxWidth: 800, margin: "0 auto" };

storiesOf("PlayerList", module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add("Basic List", () => (
    <Router history={history}>
      <List todos={todos} />
    </Router>
  ));
