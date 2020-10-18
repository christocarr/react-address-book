import React, { useState } from 'react';

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
			<form onSubmit={handleSubmit}>
				<input
					value={newContact.name}
					name="name"
					type="text"
					onChange={handleChange}
				/>
				<input
					value={newContact.addressLineOne}
					name="addressLineOne"
					type="text"
					onChange={handleChange}
				/>
				<button>Add contact</button>
			</form>
		</div>
	);
}

export default AddContact;
