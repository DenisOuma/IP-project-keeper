import React from "react";
import PropTypes from "prop-types";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import SettingsPhoneOutlinedIcon from "@mui/icons-material/SettingsPhoneOutlined";

function ContactItem({ contact }) {
	const { id, name, email, phone, type } = contact;
	return (
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{name}{" "}
				<span
					style={{ float: "right" }}
					className={
						"badge " +
						(type === "professional" ? "badge-success" : "badge-primary")
					}
				>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</span>
			</h3>
			<ul className="list">
				{email && (
					<li>
						<AttachEmailOutlinedIcon fontSize="small" className="icon-style" />{" "}
						{email}
					</li>
				)}
				{phone && (
					<li>
						<SettingsPhoneOutlinedIcon
							fontSize="small"
							className="icon-style"
						/>{" "}
						{phone}
					</li>
				)}
			</ul>
			<p>
				<button className="btn btn-dark btn-sm">Update</button>
				<button className="btn btn-danger btn-sm">Delete</button>
			</p>
		</div>
	);
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
