import React from "react";

import Menu from "../molecules/Menu";
import Header from "../organisms/Header";

const Layout = ({ children, ...props }) => {
  return (
    <div className="container">
      <Header {...props} />
      <div id="layout">
        <aside id="sidebar">
          <Menu />
        </aside>
        <main id="main">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
