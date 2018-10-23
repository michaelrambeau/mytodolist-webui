import createApi from "./todos-api";
import allTodos from "./todos.json";

const api = createApi({ delay: 0 });

test("`find` should return a list of player", async () => {
  const { data } = await api.find();
  expect(data.length).toBe(allTodos.length);
});

test("`find` should return a single TODO", async () => {
  const { data } = await api.get("0001");
  expect(data.title).toBe("My first To do");
});

test("`update` should update a TODO", async () => {
  await api.update("0001", { title: "An other title!" });
  const { data } = await api.get("0001");
  expect(data.title).toBe("An other title!");
});
