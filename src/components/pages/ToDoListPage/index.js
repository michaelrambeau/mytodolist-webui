import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps, withState } from "recompose";

import Page from "../../templates/Page";
import FetchItemList from "../../../containers/FetchItemList";
import ToDoListPage from "./ToDoListPage";

const PlayerListContainer = ({
  dependencies,
  match,
  page,
  setPage,
  ...props
}) => {
  const { todosApi } = dependencies;
  const limit = 5;
  const skip = page * limit;
  const query = {
    skip,
    limit
  };
  return (
    <Page {...props}>
      <FetchItemList api={todosApi} query={query}>
        {withProps({ setPage, query })(ToDoListPage)}
      </FetchItemList>
    </Page>
  );
};

PlayerListContainer.propTypes = { dependencies: PropTypes.object.isRequired };

const addPageState = withState("page", "setPage", 0);

export default withRouter(addPageState(PlayerListContainer));
