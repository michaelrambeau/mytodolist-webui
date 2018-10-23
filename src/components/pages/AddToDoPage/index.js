// @flow
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import type { TodosApi } from "../../api/todos/todos-types";

import Page from "../../templates/Page";
import AddToDoPage from "./AddToDoPage";
import FetchItemList from "../../../containers/FetchItemList";

const AddToDoContainer = (props: {
  dependencies: { todosApi: TodosApi },
  history: Object,
  match: Object
}) => {
  const { dependencies, history } = props;
  const { todosApi } = dependencies;
  const onSubmit = async (values, { props, setSubmitting, setErrors }) => {
    try {
      await todosApi.create(values);
      history.push(`/todos`);
    } catch (error) {
      setErrors({ general: error.message });
    }
  };
  return (
    <Page {...props}>
      <FetchItemList api={todosApi}>
        {({ data, loading }) => (
          <AddToDoPage onSubmit={onSubmit} loading={loading} />
        )}
      </FetchItemList>
    </Page>
  );
};

AddToDoContainer.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(AddToDoContainer);
