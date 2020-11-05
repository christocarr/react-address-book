import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addContact, editContact } from '../actions';
import styles from './editContactForm.module.css';

function EditContactForm({ contact, addContact, editContact }) {
	const [updatedContact, setUpdatedContact] = useState({
		name: '',
		firstLine: '',
		secondLine: '',
		town: '',
		county: '',
		postcode: '',
		email: '',
		phone: '',
	});

	useEffect(() => {
		setUpdatedContact(contact);
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdatedContact({ ...updatedContact, [name]: value });
	};

	const handleSubmit = (e) => {
		console.log('submitting');
		console.log(updatedContact);
		e.preventDefault();
		addContact(updatedContact);
		editContact({
			type: 'EDIT_CONTACT',
		});
	};

	return (
		<div className={styles.edit__form_container}>
			<form onSubmit={handleSubmit}>
				<input
					value={updatedContact.name}
					onChange={handleChange}
					type="text"
					name="name"
					placeholder="name"
					required
				/>
				<input
					value={updatedContact.firstLine}
					onChange={handleChange}
					type="text"
					name="firstLine"
					placeholder="first line"
				/>
				<input
					value={updatedContact.secondLine}
					onChange={handleChange}
					type="text"
					name="secondLine"
					placeholder="second line"
				/>
				<input
					value={updatedContact.town}
					onChange={handleChange}
					type="text"
					name="town"
					placeholder="town"
				/>
				<input
					value={updatedContact.county}
					onChange={handleChange}
					type="text"
					name="county"
					placeholder="county"
				/>
				<input
					value={updatedContact.postcode}
					onChange={handleChange}
					type="text"
					name="postcode"
					placeholder="postcode"
				/>
				<input
					value={updatedContact.email}
					onChange={handleChange}
					type="text"
					name="email"
					placeholder="email"
					required
				/>
				<input
					value={updatedContact.phone}
					onChange={handleChange}
					type="text"
					name="phone"
					placeholder="phone"
				/>
				<button>Update</button>
			</form>
		</div>
	);
}

export default connect(null, { addContact, editContact })(EditContactForm);
