import renderApp from "./utils/render-app";
import { wait } from "react-testing-library";

it("Should render the homepage", async () => {
  const { getByText } = renderApp({ route: "/" });
  await wait(() => getByText(/welcome/i));
  await getByText(/features/i);
});
