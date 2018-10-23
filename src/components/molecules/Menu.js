import React from "react";
import { withRouter, Link as ReactRouterLink } from "react-router-dom";
import { Pane, Menu, Link } from "evergreen-ui";

const navItems = [
  { text: "Home", path: "/" },
  { text: "All Todos", path: "/todos" },
  { text: "Add New Todo", path: "/add" }
];

const NavMenu = () => {
  return (
    <Pane border="default">
      <Menu className="menu">
        <Menu.Group>
          {navItems.map(({ path, text }) => (
            <Menu.Item key={path}>
              <Link is={ReactRouterLink} to={path}>
                {text}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Group>
      </Menu>
    </Pane>
  );
};

export default withRouter(NavMenu);
