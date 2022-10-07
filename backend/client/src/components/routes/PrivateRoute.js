import React from "react";
import { Navigate, Route } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";

function PrivateRoute({ children }) {
	const authContext = React.useContext(AuthContext);
	const { isAuthenticated, loading } = authContext;
	return isAuthenticated && !loading ? (
		children
	) : (
		<Navigate to="/login"></Navigate>
	);
}

export default PrivateRoute;
