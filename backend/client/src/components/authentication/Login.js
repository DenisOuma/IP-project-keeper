import React from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/authentication/authContext";
import AlertContext from "../../context/alert/alertContext";

function Login(props) {
	const alertContext = React.useContext(AlertContext);
	const authContext = React.useContext(AuthContext);
	const history = useNavigate();

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	React.useEffect(() => {
		if (isAuthenticated) {
			history("/");
		}

		if (error === "Invalid Email or Password") {
			setAlert(error, "danger");
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated]);
	const [newUser, setNewUser] = React.useState({
		email: "",
		password: "",
	});

	const { email, password } = newUser;

	const onChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
			setAlert("Please enter Required fields", "danger");
		}
		login({
			email,
			password,
		});
	};

	return (
		<div className="form-container">
			<h1>
				Keeper Account <span className="text-primary">Login</span>
			</h1>

			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input type="email" name="email" value={email} onChange={onChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
					/>
				</div>
				<input
					type="submit"
					value="Sign in"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
}

export default Login;
