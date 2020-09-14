import React, { useRef, useState } from "react";

const TodoForm = ({ onNewTodo }) => {
  const [todoText, setTodoText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    if (todoText === "") return;

    setLoading(true);
    onNewTodo(todoText).then(() => {
      setTodoText("");
      setLoading(false);
      inputRef.current.focus();
    });
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <label className="todo-form__label" htmlFor="todo">
        Todo
      </label>
      <input
        ref={inputRef}
        className="todo-form__input"
        placeholder="What needs to be done?"
        id="todo"
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        disabled={isLoading}
      ></input>
      <button disabled={isLoading} className="todo-form__button" type="submit">
        Create
      </button>
    </form>
  );
};

export default TodoForm;
