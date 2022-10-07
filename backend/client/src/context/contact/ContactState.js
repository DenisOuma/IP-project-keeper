import React, { useReducer } from "react";
import axios from "axios";

import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	SET_ALERT,
	REMOVE_ALERT,
	CONTACT_ERROR,
	CLEAR_CONTACTS,
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: null,
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);
	const getContacts = async () => {
		try {
			const res = await axios.get("/api/contacts");
			dispatch({ type: GET_CONTACTS, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
		}
	};

	const addContact = async (contact) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.post("/api/contacts", contact, config);
			dispatch({ type: ADD_CONTACT, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
		}

		dispatch({ type: ADD_CONTACT, payload: contact });
	};
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	const clearContacts = () => {
		dispatch({ type: CLEAR_CONTACTS });
	};

	const setCurrentContact = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	const clearContact = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};
	const filterContacts = (text) => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<contactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				addContact,
				deleteContact,
				setCurrentContact,
				clearContact,
				updateContact,
				filterContacts,
				clearFilter,
				getContacts,
				clearContacts,
			}}
		>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
