import React from "react";
import PropTypes from "prop-types";
import { Pane, Text } from "evergreen-ui";

const PaginationStatus = ({ currentPage, pageCount }) => {
  if (pageCount === 1) return null;
  return (
    <Pane marginBottom={8}>
      <Text>
        Page {currentPage + 1} of {pageCount}
      </Text>
    </Pane>
  );
};

PaginationStatus.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired
};

export default PaginationStatus;
