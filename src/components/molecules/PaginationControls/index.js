import React from "react";
import { Pane, Button } from "evergreen-ui";

const PaginationControls = props => {
  const { pages, currentPage, setPage } = props;
  if (pages.length === 1) return null;
  return (
    <Pane marginTop={16}>
      {pages.map(page => (
        <PageLink
          key={page}
          page={page}
          currentPage={currentPage}
          setPage={setPage}
        />
      ))}
    </Pane>
  );
};

const PageLink = ({ page, currentPage, setPage }) => {
  return page === currentPage ? (
    <Button disabled marginRight={8} appearance={"primary"}>
      {page + 1}
    </Button>
  ) : (
    <Button
      marginRight={8}
      appearance={"primary"}
      key={page}
      onClick={() => setPage(page)}
    >
      {page + 1}
    </Button>
  );
};

export default PaginationControls;
