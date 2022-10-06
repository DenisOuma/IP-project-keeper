import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

function App() {
	return (
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
	);
}

export default App;
