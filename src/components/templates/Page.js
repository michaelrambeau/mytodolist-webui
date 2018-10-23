import React from "react";
import { withRouter } from "react-router-dom";

import Layout from "./Layout";

/**
 * `Page` template used to create all application pages, for logged-in users
 */
const Page = props => {
  const { children } = props;
  return <Layout {...props}>{children}</Layout>;
};

export default withRouter(Page);
