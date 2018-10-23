import React from "react";
import { Alert } from "evergreen-ui";

import Page from "../templates/Page";

const NotFoundPage = props => {
  return (
    <Page {...props}>
      <Alert intent="danger" title="Page not found!" />
    </Page>
  );
};

export default NotFoundPage;
