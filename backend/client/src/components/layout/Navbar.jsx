import React from "react";
import { Link } from "react-router-dom";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

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
						<HomeRoundedIcon fontSize="small" />
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" className="icon-name">
						<InfoRoundedIcon fontSize="small" />
						About
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
