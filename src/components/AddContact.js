import React, { useState, useEffect } from 'react';
import PostCodeSearch from './PostCodeSearch';
import AddContactForm from './AddContactForm';

function AddContact({ setContacts }) {
	const [newContact, setNewContact] = useState({
		name: '',
		addressLineOne: '',
		addressLineTwo: '',
		city: '',
		county: '',
	});
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

	useEffect(() => {
		const addressArray = addressSelect.split(',')
		console.log(addressArray)
		const addressObject = {}
	}, [postcode, addressSelect])

	//add new contact to contact list on form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setContacts((prevState) => [...prevState, newContact]);
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
				postcode={postcode}
			/>
		</div>
	);
}

export default AddContact;
