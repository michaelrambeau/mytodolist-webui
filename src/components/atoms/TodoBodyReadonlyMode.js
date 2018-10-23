import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "evergreen-ui";

const TodoBodyReadonlyMode = ({ children }) => {
  return children ? (
    <Paragraph>{children}</Paragraph>
  ) : (
    <Paragraph color="muted">[No content]</Paragraph>
  );
};

TodoBodyReadonlyMode.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoBodyReadonlyMode;
