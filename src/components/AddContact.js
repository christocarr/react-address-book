import React, { useState, useEffect } from 'react';
import PostCodeSearch from './PostCodeSearch';
import AddContactForm from './AddContactForm';

function AddContact({ setContacts }) {
	//setup initial new contact state to clear form when submitted
	const initialNewState = {
		name: '',
		addressLineOne: '',
		addressLineTwo: '',
		city: '',
		county: '',
		postcode: '',
		telephone: '',
		email: '',
	};
	const [newContact, setNewContact] = useState(initialNewState);
	const [addressSelect, setAddressSelect] = useState('');
	const [postcode, setPostcode] = useState('');

	// set individual contact properties on form input change
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewContact((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	//update form when address is selected
	useEffect(() => {
		const selectedAddress = addressSelect.split(',');
		setNewContact((prevState) => ({
			...prevState,
			addressLineOne: selectedAddress[0],
			addressLineTwo: selectedAddress[1],
			city: selectedAddress[5],
			county: selectedAddress[6],
			postcode: postcode,
		}));
	}, [addressSelect, postcode]);

	//add new contact to contact list on form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setContacts((prevState) => [...prevState, newContact]);
		//clear form
		setNewContact(initialNewState);
	};

	return (
		<div>
			<PostCodeSearch
				setAddressSelect={setAddressSelect}
				setPostcode={setPostcode}
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
