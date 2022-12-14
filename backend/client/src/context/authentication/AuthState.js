import React, { useReducer } from "react";
import axios from "axios";
import authContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utilities/setAuthToken";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem("userToken"),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const loadUser = async () => {
		if (localStorage.userToken) {
			setAuthToken(localStorage.userToken, {
				headers: {
					"x-auth-token": localStorage.userToken,
				},
			});
		}
		console.log("in load user");
		try {
			const res = await axios.get("/api/auth");

			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		} catch (err) {
			// console.log("load user=>", err);
			dispatch({
				type: AUTH_ERROR,
			});
		}
	};

	const register = async (formData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/users", formData, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});

			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	const login = async (formData) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await axios.post("/api/auth", formData, config);
			// console.log();

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});

			loadUser();
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg,
			});
		}
	};

	const logout = () => {
		dispatch({ type: LOGOUT });
	};

	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS });
	};

	return (
		<authContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				loadUser,
				login,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthState;
