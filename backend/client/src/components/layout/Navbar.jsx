import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authentication/authContext";
import ContactContext from "../../context/contact/contactContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
			<li>
				<Link to="/" className="icon-name">
					<HomeRoundedIcon fontSize="small" className="icon-space" />
					Home
				</Link>
			</li>
			<li>
				<a
					onClick={onLogout}
					href="#!"
					style={{ display: "flex", alignItems: "center" }}
				>
					<LoginIcon style={{ color: "grey", marginRight: "10px" }} />
					<span className="hide-sm">Logout</span>
				</a>
			</li>
			<li>
				<Link to="/about" className="icon-name">
					<InfoRoundedIcon fontSize="small" className="icon-space" />
					About
				</Link>
			</li>
			<li style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
				{" "}
				{user && user.name}{" "}
				<AccountCircleIcon
					fontSize="large"
					style={{ color: "grey", marginLeft: "5px" }}
				/>
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
	// console.log(authContext);
	return (
		<div className="navbar bg-primary">
			<h1>
				<LockPersonTwoToneIcon fontSize="large" className="icon-style" />
				Keeper
			</h1>
			<ul style={{ display: "flex", alignItems: "center" }}>
				{isAuthenticated ? authLinks : guestLinks}
			</ul>
		</div>
	);
}

export default Navbar;
