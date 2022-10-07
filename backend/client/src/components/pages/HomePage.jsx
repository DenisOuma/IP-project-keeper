import React from "react";
import Contact from "../contacts-components/Contact";
import ContactFilter from "../contacts-components/ContactFilter";
import ContactForm from "../contacts-components/ContactForm";
import AuthContext from "../../context/authentication/authContext";
function HomePage() {
	const authContext = React.useContext(AuthContext);
	const { loadUser } = authContext;
	React.useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="grid-2">
			<div className="">
				<ContactForm />
			</div>
			<div className="">
				<ContactFilter />
				<Contact />
			</div>
		</div>
	);
}

export default HomePage;
