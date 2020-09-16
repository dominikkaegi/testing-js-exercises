import React from "react";
import filters from "./filters";

const TodoFooter = ({
  todos,
  activeFilter = filters.ALL,
  onFilterChange,
  onDeleteCompleted,
}) => {
  if (todos.length < 1) return null;

  const itemsLeft = todos.filter((item) => !item.isCompleted).length;

  return (
    <div className="todo-footer">
      <div>{itemsLeft} items left</div>
      <div>
        <ul className="todo-filter-list">
          <li>
            <button
              type="button"
              className={`todo-footer__button ${
                activeFilter === filters.ALL ? "filter--selected" : ""
              }`}
              onClick={() => onFilterChange(filters.ALL)}
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`todo-footer__button ${
                activeFilter === filters.ACTIVE ? "filter--selected" : ""
              }`}
              onClick={() => onFilterChange(filters.ACTIVE)}
            >
              Active
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`todo-footer__button ${
                activeFilter === filters.COMPLETED ? "filter--selected" : ""
              }`}
              onClick={() => onFilterChange(filters.COMPLETED)}
            >
              Completed
            </button>
          </li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          className="todo-footer__button"
          onClick={() => onDeleteCompleted()}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFooter;
