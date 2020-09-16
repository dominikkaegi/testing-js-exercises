import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../utils/api';

const Login = () => {
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginFailed, setIsLoginFailed] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const onSubmit = (event) => {
		event.preventDefault();
		if (!Boolean(username) || !Boolean(password)) return;

		setLoading(true);
		api.login(username, password).then((data) => {
			if (data) {
				history.push('/todo');
				setLoading(false);
			} else {
				setIsLoginFailed(true);
				setLoading(false);
			}
		});
	};
	return (
		<>
			<h3>Login to ToDo</h3>
			{isLoginFailed && (
				<div className="login-error" role="alert">
					Login failed! Please Try again.
				</div>
			)}
			<form onSubmit={onSubmit} className="login-form">
				<label className="username-form__label" htmlFor="username">
					Username
				</label>
				<input
					className="username-form__input"
					placeholder="Username is admin"
					id="username"
					type="text"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					disabled={isLoading}
				></input>
				<label className="password-form__label" htmlFor="password">
					Password
				</label>
				<input
					className="password-form__input"
					placeholder="Password is admin"
					id="password"
					type="text"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					disabled={isLoading}
				></input>
				<button disabled={isLoading} className="login-form__button" type="submit">
					Login
				</button>
			</form>
		</>
	);
};

export default Login;
