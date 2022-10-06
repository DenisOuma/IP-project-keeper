import React from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter() {
	const contactContext = React.useContext(ContactContext);
	const text = React.useRef("");
	const { filterContacts, clearFilter, filtered } = contactContext;

	React.useEffect(() => {
		if (filtered === null) {
			text.current.value = "";
		}
	}, [filtered]);

	const onChange = (e) => {
		if (text.current.value !== "") {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<>
			<form action="">
				<input
					ref={text}
					type="text"
					placeholder="Filter My Contacts"
					onChange={onChange}
				/>
			</form>
		</>
	);
}

export default ContactFilter;
