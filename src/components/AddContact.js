import React, { useState } from 'react';
import PostCodeSearch from './PostCodeSearch';

function AddContact({ setContacts }) {
	const [newContact, setNewContact] = useState({
		name: '',
		addressLineOne: '',
		addressLineTwo: '',
		city: '',
		postcode: '',
		telephone: '',
		email: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewContact((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setContacts((prevState) => [...prevState, newContact]);
	};

	return (
		<div>
			<PostCodeSearch />
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input
					id="name"
					value={newContact.name}
					name="name"
					type="text"
					onChange={handleChange}
				/>
				<label htmlFor="firstLine">Address Line One</label>
				<input
					id="firstLine"
					value={newContact.addressLineOne}
					name="addressLineOne"
					type="text"
					onChange={handleChange}
				/>
				<label htmlFor="secondLine">Address Line Two</label>
				<input
					id="secondLine"
					value={newContact.addressLineTwo}
					name="secondLine"
					type="text"
					onChange={handleChange}
				/>
				<label htmlFor="city">Town/City</label>
				<input
					id="city"
					value={newContact.city}
					name="city"
					type="text"
					onChange={handleChange}
				/>
				<label htmlFor="postcode">Postcode</label>
				<input
					id="postcode"
					value={newContact.postcode}
					name="postcode"
					type="text"
					onChange={handleChange}
				/>
				<button>Add contact</button>
			</form>
		</div>
	);
}

export default AddContact;
