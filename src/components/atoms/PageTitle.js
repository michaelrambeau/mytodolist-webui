import React from "react";
import { Heading } from "evergreen-ui";

const PageTitle = ({ children }) => {
  return (
    <Heading
      size={700}
      borderBottom="1px solid #E4E7EB"
      paddingBottom={8}
      marginBottom={8}
    >
      {children}
    </Heading>
  );
};

export default PageTitle;
