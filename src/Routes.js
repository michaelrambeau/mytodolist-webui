import React from "react";
import { Switch, Route } from "react-router-dom";
import { withProps, compose } from "recompose";

import HomePage from "./components/pages/HomePage";
import ToDoListPage from "./components/pages/ToDoListPage";
import AddToDoPage from "./components/pages/AddToDoPage";
import EditToDoPage from "./components/pages/EditToDoPage";
import ViewToDoPage from "./components/pages/ViewTodoPage";
import NotFound from "./components/pages/NotFound";
// import PrivateRoute from "./PrivateRoute";

const Routes = props => {
  const { auth } = props;
  const enhance = compose(withProps({ ...props }));
  return (
    <Switch>
      <Route exact path="/" component={enhance(HomePage)} />
      <Route exact path="/todos" component={enhance(ToDoListPage)} />
      <Route exact path="/add" component={enhance(AddToDoPage)} auth={auth} />
      <Route
        exact
        path="/todos/:id"
        component={enhance(ViewToDoPage)}
        auth={auth}
      />
      <Route
        exact
        path="/todos/:id/edit"
        component={enhance(EditToDoPage)}
        auth={auth}
      />
      <Route component={enhance(NotFound)} />
    </Switch>
  );
};

export default Routes;
