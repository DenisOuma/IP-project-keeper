import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	SET_ALERT,
	REMOVE_ALERT,
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: "Jill Johnson",
				email: "jillJohnson@gmil.com",
				phone: "111-111-1111",
				type: "personal",
			},
			{
				id: 2,
				name: "Sara Watson",
				email: "jillJohnson@gmil.com",
				phone: "222-222-2222",
				type: "personal",
			},
			{
				id: 3,
				name: "Harry White",
				email: "jillJohnson@gmil.com",
				phone: "333-333-3333",
				type: "professional",
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	return (
		<contactContext.Provider
			value={{
				contacts: state.contacts,
			}}
		>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
