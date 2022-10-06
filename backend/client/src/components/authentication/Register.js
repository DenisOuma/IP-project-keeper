import React from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";

function Register() {
	const alertContext = React.useContext(AlertContext);
	const authContext = React.useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error } = authContext;

	React.useEffect(() => {
		if (error === "User already exists, Please login") {
			setAlert(error, "danger");
		}
		// eslint-disable-next-line
	}, [error]);

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
						minlength="6"
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
						minlength="6"
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
