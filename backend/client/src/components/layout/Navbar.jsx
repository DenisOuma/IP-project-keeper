import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";
import ContactContext from "../../context/contact/contactContext";

import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import LoginIcon from "@mui/icons-material/Login";

function Navbar() {
	const authContext = React.useContext(AuthContext);
	const contactContext = React.useContext(ContactContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li> {user && user.name}</li>
			<li>
				<a onClick={onLogout} href="#!">
					<LoginIcon />
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register" className="icon-name">
					<SensorOccupiedIcon fontSize="small" className="icon-space" />
					Sign Up
				</Link>
			</li>
			<li>
				<Link to="/login" className="icon-name">
					<LoginIcon fontSize="small" className="icon-space" />
					Sign In
				</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<LockPersonTwoToneIcon fontSize="large" className="icon-style" />
				Keeper
			</h1>
			<ul>
				{isAuthenticated ? authLinks : guestLinks}
				{/* <li>
					<Link to="/" className="icon-name">
						<HomeRoundedIcon fontSize="small" className="icon-space" />
						Home
					</Link>
				</li> */}
				<li>
					<Link to="/about" className="icon-name">
						<InfoRoundedIcon fontSize="small" className="icon-space" />
						About
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
