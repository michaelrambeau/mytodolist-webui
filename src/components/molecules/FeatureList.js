import React from "react";
import PropTypes from "prop-types";
import { ListItem, UnorderedList } from "evergreen-ui";

const FeatureList = ({ features }) => {
  return (
    <UnorderedList>
      {features.map(({ name, done }) => (
        <ListItem
          key={name}
          icon={done ? "tick-circle" : "circle"}
          iconColor={done ? "success" : "danger"}
        >
          {name}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

FeatureList.propTypes = {
  features: PropTypes.array.isRequired
};

export default FeatureList;
