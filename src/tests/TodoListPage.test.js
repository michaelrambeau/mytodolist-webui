import { wait, waitForElement } from "react-testing-library";

import renderApp from "./utils/render-app";

it("Should render the Todo list", async () => {
  const { getByText, container, debug, getByTestId } = renderApp({
    route: "/todos"
  });
  await wait(() => getByText(/Todo List/i));
  const list = await waitForElement(() => getByTestId("todo-list"));
  // console.log(list.innerHTML);
  const links = Array.from(list.querySelectorAll("a"));
  expect(links.length).toBeGreaterThan(1);
});
