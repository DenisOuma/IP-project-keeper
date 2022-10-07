import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/authentication/AuthState";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import AlertState from "./context/alert/AlertState";
import AlertMessage from "./components/layout/AlertMessage";
import setAuthToken from "./utilities/setAuthToken";
import PrivateRoute from "./components/routes/PrivateRoute";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<>
							<Navbar />
							<div className="container">
								<AlertMessage />
								<Routes>
									<Route exact path="/" element={<HomePage />} />
									<Route exact path="/about" element={<AboutPage />} />
									<Route exact path="/register" element={<Register />} />
									<Route exact path="/login" element={<Login />} />
								</Routes>
							</div>
						</>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	);
}

export default App;
