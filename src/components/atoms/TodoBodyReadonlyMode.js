import React from "react";
import PropTypes from "prop-types";
import { Pane, Paragraph } from "evergreen-ui";
import ReactMarkdown from "react-markdown";

import "./markdown-body.css";

const TodoBodyReadonlyMode = ({ children }) => {
  return children ? (
    <Pane className="markdown-body">
      <ReactMarkdown source={children} />
    </Pane>
  ) : (
    <Paragraph color="muted">[No content]</Paragraph>
  );
};

TodoBodyReadonlyMode.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoBodyReadonlyMode;
