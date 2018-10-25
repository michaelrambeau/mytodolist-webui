import { configure } from "@storybook/react";

function loadStories() {
  require("../src/components/atoms/stories");
  require("../src/components/molecules/ToDoList/stories");
  require("../src/components/organisms/ToDoView/stories");
  require("../src/components/organisms/ToDoForm/stories");
}

configure(loadStories, module);
