import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import TodoBodyReadonlyMode from "./TodoBodyReadonlyMode";

const styles = { maxWidth: 800, margin: "0 auto" };

const input = `
## react-async

https://github.com/ghengeveld/react-async

## react-request

https://github.com/jamesplease/react-request

* Uses the native fetch API
* Smart deduping of requests
* Customizable response caching
`;

storiesOf("Atoms", module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add("Loading", () => <Loading />)
  .add("ErrorMessage", () => <ErrorMessage>This is a bug!</ErrorMessage>)
  .add("TodoBodyReadonlyMode (Markdown)", () => (
    <TodoBodyReadonlyMode>{input}</TodoBodyReadonlyMode>
  ))
  .add("TodoBodyReadonlyMode (empty content)", () => <TodoBodyReadonlyMode />);
