import React from "react";
import { Alert } from "evergreen-ui";

const ErrorMessage = ({ children }) => {
  return (
    <Alert title="Unexpected Error" intent="danger">
      {children}
    </Alert>
  );
};

export default ErrorMessage;
