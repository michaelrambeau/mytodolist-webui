// @flow
import React from "react";
import type { AuthAPI } from "./api/auth/auth-types";
import type { TodosApi } from "./api/todos/todos-types";

import Routes from "./Routes";
import AuthContainer from "./containers/Auth";
import Loading from "./components/atoms/Loading";
import "./App.css";

type Props = {
  dependencies: {
    authApi: AuthAPI,
    todosApi: TodosApi
  }
};

const App = (props: Props) => {
  const { dependencies } = props;
  return (
    <AuthContainer api={dependencies.authApi}>
      {auth => {
        return auth.pending ? (
          <Loading />
        ) : (
          <Routes dependencies={dependencies} auth={auth} />
        );
      }}
    </AuthContainer>
  );
};

export default App;
