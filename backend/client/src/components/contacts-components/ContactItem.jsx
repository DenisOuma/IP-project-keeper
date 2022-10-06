import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import SettingsPhoneOutlinedIcon from "@mui/icons-material/SettingsPhoneOutlined";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";

function ContactItem({ contact }) {
	const contactContext = useContext(ContactContext);
	const { deleteContact } = contactContext;
	const { id, name, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(id);
	};

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
			<p className="delete-update">
				<button className="btn btn-dark btn-sm">Edit</button>
				<span>
					<button className="btn btn-sm" onClick={onDelete}>
						<DeleteSweepRoundedIcon className="delete-icon" />
					</button>
				</span>
			</p>
		</div>
	);
}

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
