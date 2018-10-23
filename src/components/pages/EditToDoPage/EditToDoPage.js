import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { withProps } from "recompose";

import Loading from "../../atoms/Loading";
import ErrorMessage from "../../atoms/ErrorMessage";
import ToDoForm from "../../organisms/ToDoForm";
import PageTitle from "../../atoms/PageTitle";

const EditToDoPage = ({ data: todo, loading, error, onSubmit }) => {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  const EditToDoForm = withProps({ isNewToDo: false })(ToDoForm);
  return (
    <Fragment>
      <PageTitle>Edit "{todo.title}"</PageTitle>
      <Formik onSubmit={onSubmit} initialValues={todo}>
        {EditToDoForm}
      </Formik>
    </Fragment>
  );
};

EditToDoPage.propTypes = {
  todo: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};

export default EditToDoPage;
