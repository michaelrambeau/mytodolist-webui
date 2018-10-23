import React from "react";
import { Pane, Paragraph, Button } from "evergreen-ui";
import { Link as ReactRouterLink } from "react-router-dom";

import PageTitle from "../atoms/PageTitle";
import DateFromNow from "../atoms/DateFromNow";
import TodoBodyReadonlyMode from "../atoms/TodoBodyReadonlyMode";

const ToDoView = ({ todo, onDelete }) => {
  const { title, body, created_at, updated_at } = todo;
  const handleDelete = () => onDelete(todo._id);
  return (
    <Pane>
      <Pane marginBottom={8} textAlign={"right"}>
        <Paragraph>
          Created <DateFromNow date={created_at} />
        </Paragraph>
        {updated_at && (
          <Paragraph>
            Updated <DateFromNow date={updated_at} />
          </Paragraph>
        )}
      </Pane>
      <PageTitle>{title}</PageTitle>
      <Pane marginBottom={16}>
        <TodoBodyReadonlyMode>{body}</TodoBodyReadonlyMode>
      </Pane>
      <Pane marginTop={8} display="flex" justifyContent="right">
        <Button
          type="button"
          intent={"danger"}
          onClick={handleDelete}
          appearance={"primary"}
          marginRight={8}
        >
          DELETE
        </Button>
        <Button
          is={ReactRouterLink}
          type="button"
          appearance={"default"}
          to={`/todos/${todo._id}/edit`}
        >
          EDIT
        </Button>
      </Pane>
    </Pane>
  );
};

export default ToDoView;
