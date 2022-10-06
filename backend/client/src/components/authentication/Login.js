import React from "react";

function Login() {
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
		console.log("Register submit");
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
