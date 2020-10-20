import React, { useState, useEffect } from 'react';
import PostCodeSearch from './PostCodeSearch';
import AddContactForm from './AddContactForm';

function AddContact({ setContacts }) {
		const initialNewState = {
		name: '',
		addressLineOne: '',
		addressLineTwo: '',
		city: '',
		county: '',
		postcode: '',
		telephone: '',
		email: '',
	}
	const [newContact, setNewContact] = useState(initialNewState);
	const [addressSelect, setAddressSelect] = useState('');

	// set individual contact properties on form input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewContact((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	//add new contact to contact list on form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setContacts((prevState) => [...prevState, newContact]);
		setNewContact(initialNewState)
	};

	return (
		<div>
			<PostCodeSearch
				setAddressSelect={setAddressSelect}
			/>
			<AddContactForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				newContact={newContact}
			/>
		</div>
	);
}

export default AddContact;
