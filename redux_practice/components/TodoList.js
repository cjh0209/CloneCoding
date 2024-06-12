import React from "react";

import TodoItem from "./TodoItem.js";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;