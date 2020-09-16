const db = {
	KEY: 'TODOS_',
	setTodos(todos) {
		localStorage.setItem(this.KEY, JSON.stringify(todos));
	},
	getTodos(todos) {
		const data = localStorage.getItem(this.KEY);
		return Boolean(data) ? JSON.parse(data) : '';
	},
	createTodo(todo) {
		let todos = this.getTodos();
		todos = [...todos, todo];
		this.setTodos(todos);
		return todo;
	},
	updateTodo(todo) {
		let todos = this.getTodos();
		todos = todos.map((item) => (item.id !== todo.id ? item : todo));
		this.setTodos(todos);
		return todo;
	},
	deleteTodo(todo) {
		let todos = this.getTodos();
		todos = todos.filter((item) => item.id !== todo.id);
		this.setTodos(todos);
		return todo;
	}
};

export default db;
