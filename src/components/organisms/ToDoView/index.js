import React from "react";
import { Card, Pane, Paragraph, Button, Heading } from "evergreen-ui";
import { Link as ReactRouterLink } from "react-router-dom";

import PageTitle from "../../atoms/PageTitle";
import DateFromNow from "../../atoms/DateFromNow";
import TodoBodyReadonlyMode from "../../atoms/TodoBodyReadonlyMode";

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
      <Card marginBottom={16} border="default" borderWidth={5}>
        <Pane borderBottom="5px solid #E4E7EB" padding={16}>
          <Heading size={700}>{title}</Heading>
        </Pane>
        <Pane padding={16}>
          <TodoBodyReadonlyMode>{body}</TodoBodyReadonlyMode>
        </Pane>
      </Card>
      <Pane marginTop={8} display="flex" justifyContent="flex-end">
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
