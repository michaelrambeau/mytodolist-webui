import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Heading, Button } from "evergreen-ui";

const Header = ({ auth }) => {
  return (
    <header
      style={{
        borderBottom: "1px dashed #ccc",
        marginBottom: "1rem",
        padding: "1rem 0"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Heading size={900}>My Todo List</Heading>
        </div>
        {false && (
          <div style={{ textAlign: "right", flexGrow: 1 }}>
            {auth.isAuthenticated ? (
              <LoggedinUserBlock auth={auth} />
            ) : (
              <AnonymousUserBlock auth={auth} />
            )}
          </div>
        )}
      </div>
    </header>
  );
};

const AnonymousUserBlock = ({ auth }) => {
  return (
    <div>
      <Button
        onClick={() => auth.login({ username: "mike" })}
        className="btn btn-default btn-ghost"
        type="button"
      >
        LOGIN
      </Button>
    </div>
  );
};

const LoggedinUserBlock = ({ auth }) => {
  return (
    <div>
      <Button
        onClick={auth.logout}
        className="btn btn-default btn-ghost"
        type="button"
      >
        LOGOUT
      </Button>
    </div>
  );
};

Header.propTypes = { auth: PropTypes.object.isRequired };

export default withRouter(Header);
