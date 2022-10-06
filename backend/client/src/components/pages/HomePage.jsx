import React from "react";
import Contact from "../contacts-components/Contact";
import ContactForm from "../contacts-components/ContactForm";

function HomePage() {
	return (
		<div className="grid-2">
			<div className="">
				<ContactForm />
			</div>
			<div className="">
				<Contact />
			</div>
		</div>
	);
}

export default HomePage;
