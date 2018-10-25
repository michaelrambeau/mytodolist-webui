import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Formik } from "formik";
import { withProps } from "recompose";

import todosSample from "../../../api/todos/mock/todos.json";
import TodoForm from "./index";
const history = createMemoryHistory();

const styles = { maxWidth: 800, margin: "0 auto" };

storiesOf("Todo Form", module)
  .addDecorator(story => <div style={styles}>{story()}</div>)
  .add("Basic form - Error status", () => {
    return (
      <Router history={history}>
        <TodoForm
          values={todosSample[0]}
          handleSubmit={action("Submit")}
          handleChange={action("onChange")}
          errors={{ title: "Bad title!", body: "Invalid body!" }}
        />
      </Router>
    );
  })
  .add("With Formik - Creating a new Todo item", () => {
    const initialValues = {
      title: "",
      body: ""
    };
    const AddToDoForm = withProps({ isNewToDo: true })(TodoForm);
    return (
      <Router history={history}>
        <Formik
          onSubmit={action("Submit")}
          initialValues={initialValues}
          validate={() => ({})}
        >
          {AddToDoForm}
        </Formik>
      </Router>
    );
  })
  .add("With Formik - Editing an existing Todo item", () => {
    const initialValues = todosSample[0];
    const EditToDoForm = withProps({ isNewToDo: false })(TodoForm);
    return (
      <Router history={history}>
        <Formik
          onSubmit={action("Submit")}
          initialValues={initialValues}
          validate={() => ({})}
        >
          {EditToDoForm}
        </Formik>
      </Router>
    );
  });
