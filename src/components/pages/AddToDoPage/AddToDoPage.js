import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { withProps } from "recompose";

import ToDoForm from "../../organisms/ToDoForm";
import PageTitle from "../../atoms/PageTitle";
import { validate } from "../../../modules/todo-form";

const initialValues = {
  title: "",
  body: ""
};

const AddToDoPage = ({ onSubmit, ...props }) => {
  const AddToDoForm = withProps({ isNewToDo: true })(ToDoForm);
  return (
    <Fragment>
      <PageTitle>Add a new Todo</PageTitle>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
      >
        {AddToDoForm}
      </Formik>
    </Fragment>
  );
};

AddToDoPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddToDoPage;
