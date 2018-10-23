// @flow
import React from "react";
import { Pane, Table, Link } from "evergreen-ui";
import { Link as ReactRouterLink } from "react-router-dom";

import DateFromNow from "../../atoms/DateFromNow";
import type { ToDo } from "../../api/todos/todo-types";

// type Props = {
//   players: Array<Player>,
//   locale: string
// };

const ToDoList = props => {
  const { todos } = props;
  return (
    <Pane border="default">
      <Table data-testid="todo-list">
        <Table.Head>
          <Table.TextHeaderCell>Title</Table.TextHeaderCell>
          <Table.TextHeaderCell>Created</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
          {todos.map(todo => (
            <ToDoList.Row key={todo._id} todo={todo} />
          ))}
        </Table.Body>
      </Table>
    </Pane>
  );
};

ToDoList.Row = (props: { todo: ToDo }) => {
  const { todo } = props;
  return (
    <Table.Row>
      <Table.TextCell>
        <Link is={ReactRouterLink} to={`/todos/${todo._id}`}>
          {todo.title}
        </Link>
      </Table.TextCell>
      <Table.TextCell>
        <DateFromNow date={todo.created_at} />
      </Table.TextCell>
    </Table.Row>
  );
};

export default ToDoList;
