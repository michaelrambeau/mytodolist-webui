import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
const history = createMemoryHistory();

const styles = { maxWidth: 800, margin: "0 auto" };

storiesOf("Atoms", module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add("Loading", () => <Loading />)
  .add("ErrorMessage", () => <ErrorMessage>This is a bug!</ErrorMessage>);
