import React from "react";
import { Navigate, Route } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

function PrivateRoute({ component: Component, ...rest }) {
	const authContext = React.useContext();
	const { isAuthenticated, loading } = authContext;
	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated && !loading ? (
					<Navigate to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
}

export default PrivateRoute;
