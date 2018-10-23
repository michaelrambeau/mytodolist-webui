// @flow
export type ToDoFormData = {
  title: string,
  body: string
};

export type ToDo = {
  _id: string,
  title: string,
  body: string,
  created_at: Date
};

export type ToDoApi = {
  get(string): Promise<{ data: ToDo }>,
  find(options?: { skip: number, limit: number }): Promise<{
    data: Array<ToDo>
  }>,
  create(ToDoFormData): Promise<Array<ToDo>>,
  update(_id: string, ToDoFormData): Promise<Array<ToDo>>
};
