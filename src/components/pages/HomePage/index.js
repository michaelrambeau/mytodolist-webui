import React from "react";
import {
  Pane,
  Heading,
  Paragraph,
  UnorderedList,
  ListItem,
  Link
} from "evergreen-ui";

import Page from "../../templates/Page";
import PageTitle from "../../atoms/PageTitle";
import FeatureList from "../../molecules/FeatureList";

const features = [
  { name: "Create", done: true },
  { name: "Read (list with pagination + details)", done: true },
  { name: "Update", done: true },
  { name: "Delete", done: true },
  { name: "Search", done: false },
  { name: "Authentication", done: false },
  { name: "Testing", done: true }
];

const Home = props => {
  return (
    <Page {...props}>
      <div>
        <PageTitle>Welcome!</PageTitle>
        <Paragraph marginTop="default">
          This is a very simple application to Create, Read, Update and Delete
          Todo items.
        </Paragraph>
        <Pane border={"default"} padding={16} marginTop={16} elevation={0}>
          <Heading size={500}>Stack</Heading>
          <UnorderedList>
            <ListItem>
              Built with{" "}
              <Link href={"https://facebook.github.io/create-react-app/"}>
                Create React App
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://evergreen.segment.com/">Evergreen</Link>{" "}
              components
            </ListItem>
            <ListItem>
              Form validation with{" "}
              <Link href="https://evergreen.segment.com/">Formik</Link>
            </ListItem>
            <ListItem>
              Visual testing{" "}
              <Link href="https://storybook.js.org/">Storybook</Link>
            </ListItem>
          </UnorderedList>
        </Pane>
        <Pane border={"default"} padding={16} marginTop={16} elevation={0}>
          <Heading size={500}>Features</Heading>
          <FeatureList features={features} />
        </Pane>
      </div>
    </Page>
  );
};

export default Home;
