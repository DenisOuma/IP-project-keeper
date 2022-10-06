import React from "react";
import Contact from "../contacts-components/Contact";
import ContactFilter from "../contacts-components/ContactFilter";
import ContactForm from "../contacts-components/ContactForm";

function HomePage() {
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
