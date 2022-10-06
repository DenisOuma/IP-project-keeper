import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactState from "./context/contact/ContactState";

function App() {
	return (
		<ContactState>
			<Router>
				<>
					<Navbar />
					<div className="container">
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route exact path="/about" element={<AboutPage />} />
						</Routes>
					</div>
				</>
			</Router>
		</ContactState>
	);
}

export default App;
