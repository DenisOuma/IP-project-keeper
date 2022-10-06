import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
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
		contacts: [],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	return (
		<contactContext.Provider
			value={{
				contacts: state.contacts,
				addContact,
			}}
		>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
