import React from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";
import { useNavigate } from "react-router-dom";

function Register(props) {
	const alertContext = React.useContext(AlertContext);
	const authContext = React.useContext(AuthContext);
	const history = useNavigate();
	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;
	React.useEffect(() => {
		if (isAuthenticated) {
			history("/");
		}

		if (error === "User already exists, Please login") {
			setAlert(error, "danger");
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated]);

	const [newUser, setNewUser] = React.useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { name, email, password, confirmPassword } = newUser;

	const onChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
			setAlert("Please enter Required fields", "danger");
		} else if (password !== confirmPassword) {
			setAlert("Passwords do not match", "danger");
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className="form-container">
			<h1>
				Keeper Account <span className="text-primary">Register</span>
			</h1>

			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
}

export default Register;
