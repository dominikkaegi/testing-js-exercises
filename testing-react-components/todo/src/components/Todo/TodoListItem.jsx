import React from "react";

const TodoListItem = ({ todo, onUpdate, onDelete }) => {
  const toggleCompleted = () => {
    console.log("toggeling");
    onUpdate({
      ...todo,
      isCompleted: !todo.isCompleted,
    });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const textItemClass = `todo-list-item__text ${
    todo.isCompleted ? "todo-list-item--completed" : ""
  }`;

  return (
    <li className="todo-list-item">
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          onChange={toggleCompleted}
          checked={todo.isCompleted}
          className="todo-list-item__checkbox"
          aria-label="complete"
        />
        <span className={textItemClass}>{todo.text}</span>
      </div>
      <button
        className={"todo-list-item__button"}
        type="button"
        aria-label="delete"
        onClick={handleDelete}
      >
        𝐗
      </button>
    </li>
  );
};

export default TodoListItem;
