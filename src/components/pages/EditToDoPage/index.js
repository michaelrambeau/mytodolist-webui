// @flow
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps } from "recompose";

import type { TodoApi, ToDo } from "../../../api/todos/todos-types";
import FetchSingleItem from "../../../containers/FetchSingleItem";

import EditToDoPage from "./EditToDoPage";
import Page from "../../templates/Page";

const EditToDoContainer = (props: {
  dependencies: { todosApi: TodoApi },
  history: Object,
  match: Object
}) => {
  const { dependencies, history, match } = props;
  const { id } = match.params;
  const { todosApi } = dependencies;
  const onSubmit = async (values: ToDo, { setSubmitting, setErrors }) => {
    try {
      await todosApi.update(id, values);
      history.push(`/todos`);
    } catch (error) {
      setSubmitting(false);
      setErrors({ general: error.message });
    }
  };
  return (
    <Page {...props}>
      <FetchSingleItem id={id} api={todosApi}>
        {withProps({ onSubmit })(EditToDoPage)}
      </FetchSingleItem>
    </Page>
  );
};

EditToDoContainer.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(EditToDoContainer);
