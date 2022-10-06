import React from "react";
import { Link } from "react-router-dom";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import LoginIcon from "@mui/icons-material/Login";

function Navbar() {
	return (
		<div className="navbar bg-primary">
			<h1>
				<LockPersonTwoToneIcon fontSize="large" className="icon-style" />
				Keeper
			</h1>
			<ul>
				<li>
					<Link to="/" className="icon-name">
						<HomeRoundedIcon fontSize="small" className="icon-space" />
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" className="icon-name">
						<InfoRoundedIcon fontSize="small" className="icon-space" />
						About
					</Link>
				</li>
				<li>
					<Link to="/register" className="icon-name">
						<SensorOccupiedIcon fontSize="small" className="icon-space" />
						Sign Up
					</Link>
				</li>
				<li>
					<Link to="/signin" className="icon-name">
						<LoginIcon fontSize="small" className="icon-space" />
						Sign In
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
