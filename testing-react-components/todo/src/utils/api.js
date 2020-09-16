import db from './db';

const REUQEST_DELAY = 200;

const delayedResponse = (data, delay = REUQEST_DELAY) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, delay);
	});
};
const createRandomId = () => {
	return ~~(Math.random() * 10000000);
};

const api = {
	async getTodos() {
		const todos = db.getTodos();
		return delayedResponse(todos, 100);
	},
	async login(username, password) {
		return delayedResponse(username === password);
	},
	async createTodo(todoText) {
		const todo = {
			text: todoText,
			id: createRandomId(),
			isCompleted: false,
			createdAt: new Date()
		};
		db.createTodo(todo);
		return delayedResponse(todo);
	},
	async updateTodo(todo) {
		const updatedTodo = {
			...todo,
			updatedAt: new Date()
		};
		db.updateTodo(updatedTodo);
		return delayedResponse(updatedTodo);
	},
	async deleteTodo(todo) {
		db.deleteTodo(todo);
		return delayedResponse({
			id: todo.id
		});
	},
	async deleteCompleted() {
		let todos = db.getTodos();
		const deletedTodos = todos.filter((item) => item.isCompleted);

		for (let todo of deletedTodos) {
			db.deleteTodo(todo);
		}
		const deletedIds = deletedTodos.map((item) => ({ id: item.id }));
		return delayedResponse([...deletedIds]);
	}
};

export default api;
