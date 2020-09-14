import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          onDelete={onDelete}
          onUpdate={onUpdate}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
