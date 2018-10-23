// @flow
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import type { TodoApi } from "../../../api/todos/todos-types";
import FetchSingleItem from "../../../containers/FetchSingleItem";

import TodoActionsContainer from "./TodoActionsContainer";
import Page from "../../templates/Page";
import ErrorMessage from "../../atoms/ErrorMessage";
import Loading from "../../atoms/Loading";

const ViewTodo = (props: {
  dependencies: { todosApi: TodoApi },
  history: Object,
  match: Object
}) => {
  const { dependencies, match } = props;
  const { id } = match.params;
  const { todosApi } = dependencies;
  return (
    <Page {...props}>
      <FetchSingleItem id={id} api={todosApi}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
          return <TodoActionsContainer todo={data} {...props} />;
        }}
      </FetchSingleItem>
    </Page>
  );
};

ViewTodo.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(ViewTodo);
