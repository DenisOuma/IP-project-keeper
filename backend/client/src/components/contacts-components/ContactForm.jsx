import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactForm() {
	const contactContext = useContext(ContactContext);
	const [contact, setContact] = React.useState({
		name: "",
		email: "",
		phone: "",
		type: "personal",
	});

	const { name, email, phone, type } = contact;
	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });
	console.log(contact);
	const onSubmit = (e) => {
		e.preventDefault();
		contactContext.addContact(contact);
		setContact({
			name: "",
			email: "",
			phone: "",
			type: "personal",
		});
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<h2 className="text-primary">Add A New Contact</h2>
				<input
					type="text"
					placeholder="name"
					name="name"
					value={name}
					onChange={onChange}
				/>
				<input
					type="email"
					placeholder="Email Address"
					name="email"
					value={email}
					onChange={onChange}
				/>
				<input
					type="text"
					placeholder="Phone Number"
					name="phone"
					value={phone}
					onChange={onChange}
				/>
				<h5>Contact Type</h5>
				<input
					type="radio"
					name="type"
					value="personal"
					ckecked={type === "personal".toString()}
					onChange={onChange}
				/>{" "}
				Personal{" "}
				<input
					type="radio"
					name="type"
					value="professional"
					ckecked={type === "professional".toString()}
					onChange={onChange}
				/>{" "}
				Professional{" "}
				<div className="submit-btn">
					<input
						type="submit"
						value="Add Contact"
						className="btn btn-success btn-block"
					/>
				</div>
			</form>
		</>
	);
}

export default ContactForm;
