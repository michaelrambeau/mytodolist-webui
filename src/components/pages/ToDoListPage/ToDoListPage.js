import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Pane, Alert } from "evergreen-ui";

import ToDoList from "../../molecules/ToDoList";
import PaginationControls from "../../molecules/PaginationControls";
import Loading from "../../atoms/Loading";
import Pagination from "../../../containers/Pagination";
import PageTitle from "../../atoms/PageTitle";
import PaginationStatus from "../../molecules/PaginationStatus";
import ErrorMessage from "../../atoms/ErrorMessage";

const List = ({ loading, error, data, total, setPage, query }) => {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (data.length === 0) return <Alert title="The list is empty" />;
  const { skip, limit } = query;
  return (
    <Pagination data={data} skip={skip} limit={limit} total={total}>
      {({ pages, currentPage }) => (
        <Pane>
          <PaginationStatus
            currentPage={currentPage}
            pageCount={pages.length}
          />
          <ToDoList todos={data} />
          <PaginationControls
            pages={pages}
            currentPage={currentPage}
            setPage={setPage}
          />
        </Pane>
      )}
    </Pagination>
  );
};

const TodoListPage = props => {
  return (
    <Fragment>
      <PageTitle>All Todo items</PageTitle>
      <Pane marginTop={16}>
        <List {...props} />
      </Pane>
    </Fragment>
  );
};

TodoListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object
};

export default TodoListPage;
