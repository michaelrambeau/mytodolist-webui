// @flow
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Pane, FormField, TextInput, Textarea, Button } from "evergreen-ui";

import type { ToDo } from "../api/todos/todos-types";
import ErrorMessage from "../atoms/ErrorMessage";

const ToDoForm = (props: {
  isNewToDo: boolean,
  values: ToDo,
  handleSubmit: () => void,
  handleChange: () => void,
  setFieldValue: (field: string, value: any) => void,
  isSubmitting: boolean,
  errors: Object
}) => {
  const {
    // isNewToDo,
    values,
    handleSubmit,
    handleChange,
    // setFieldValue,
    isSubmitting,
    errors
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Title"
        validationMessage={errors.title}
        isRequired
        marginBottom={16}
      >
        <TextInput
          name="title"
          onChange={handleChange}
          isInvalid={!!errors.title}
          value={values.title}
          width="100%"
        />
      </FormField>
      <FormField label="Body" validationMessage={errors.body} isRequired>
        <Textarea
          name="body"
          onChange={handleChange}
          value={values.body}
          rows={15}
          isInvalid={!!errors.body}
          width="100%"
        />
      </FormField>
      {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
      <Pane marginTop={8} display="flex" justifyContent="right">
        <Button
          is={ReactRouterLink}
          type="button"
          appearance={"default"}
          to={`/todos/${values._id}`}
          marginRight={16}
        >
          CANCEL
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          appearance={"primary"}
          isLoading={isSubmitting}
        >
          SAVE
        </Button>
      </Pane>
    </form>
  );
};

export default ToDoForm;
