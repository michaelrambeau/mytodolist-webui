import React from "react";

import Loading from "../../atoms/Loading";
import TodoView from "../../organisms/ToDoView";
import ErrorMessage from "../../atoms/ErrorMessage";

/*
Stateful component to handle the state related to actions performed on Todos in read-only mode
*/
class TodoActionsContainer extends React.Component {
  state = {
    loading: false,
    error: null
  };
  handleDelete = async id => {
    const { dependencies, history } = this.props;
    const { todosApi } = dependencies;
    try {
      this.setState({ loading: true });
      await todosApi.remove(id);
      history.push(`/todos`);
    } catch (error) {
      this.setState({ loading: false, error });
      console.error(error);
    }
  };
  render() {
    const { loading, error } = this.state;
    if (loading) return <Loading />;
    if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
    return <TodoView {...this.props} onDelete={this.handleDelete} />;
  }
}

export default TodoActionsContainer;
