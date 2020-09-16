import React, { useEffect, useState } from 'react';

import api from '../../utils/api';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

import filters from './filters';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [activeFilter, setFilter] = useState(filters.ALL);

	useEffect(() => {
		api.getTodos().then((todos) => {
			if (Boolean(todos) && todos.length > 0) {
				let filteredToDos = todos.filter((item) => {
					if (activeFilter === filters.COMPLETED) return item.isCompleted;
					else if (activeFilter === filters.ACTIVE) return !item.isCompleted;
					else return item;
				});
				setTodos(filteredToDos);
			}
		});
	}, [activeFilter]);

	const handleNewTodo = (todoText) => {
		return api.createTodo(todoText).then((todo) => {
			setTodos((todos) => [...todos, todo]);
		});
	};

	const handleUpdate = (todo) => {
		return api.updateTodo(todo).then((todo) => {
			setTodos((todos) => {
				return todos.map((item) => (item.id !== todo.id ? item : todo));
			});
		});
	};

	const handleDelete = (todo) => {
		return api.deleteTodo(todo).then(({ id }) => {
			setTodos((todos) => {
				return todos.filter((item) => item.id !== id);
			});
		});
	};

	const clearCompleted = () => {
		return api
			.deleteCompleted()
			.then((todos) => {
				return todos.map((item) => item.id);
			})
			.then((todoIds) => {
				setTodos((todos) => {
					return todos.filter((item) => !todoIds.includes(item.id));
				});
			});
	};

	return (
		<div className="todo">
			<TodoForm onNewTodo={handleNewTodo} />
			{Boolean(todos) && <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />}
			{Boolean(todos) && (
				<TodoFooter
					key={new Date().getTime().toPrecision()}
					todos={todos}
					activeFilter={activeFilter}
					onFilterChange={setFilter}
					onDeleteCompleted={clearCompleted}
				/>
			)}
		</div>
	);
};

export default Todo;
