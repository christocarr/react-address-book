import React, { useState, useEffect } from 'react';
import styles from './editContactForm.module.css';

function EditContactForm({ contact }) {
	console.log(contact);

	const {
		name,
		firstLine,
		secondLine,
		town,
		county,
		postcode,
		email,
		phone,
	} = contact;

	const [editContact, setEditContact] = useState({
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
		setEditContact({
			name,
			firstLine,
			secondLine,
			town,
			county,
			postcode,
			email,
			phone,
		});
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditContact({ ...contact, [name]: value });
	};

	return (
		<div className={styles.edit__form_container}>
			<form>
				<input
					value={editContact.name}
					onChange={handleChange}
					type="text"
					name="name"
					placeholder="name"
					required
				/>
				<input
					value={editContact.firstLine}
					onChange={handleChange}
					type="text"
					name="firstline"
					placeholder="first line"
					required
				/>
				<input
					value={editContact.secondLine}
					onChange={handleChange}
					type="text"
					name="secondLine"
					placeholder="second line"
					required
				/>
				<input
					value={contact.town}
					onChange={handleChange}
					type="text"
					name="town"
					placeholder="town"
				/>
				<input
					value={contact.county}
					onChange={handleChange}
					type="text"
					name="county"
					placeholder="county"
				/>
				<input
					value={contact.postcode}
					onChange={handleChange}
					type="text"
					name="postcode"
					placeholder="postcode"
				/>
				<input
					value={contact.email}
					onChange={handleChange}
					type="text"
					name="email"
					placeholder="email"
					required
				/>
				<input
					value={contact.phone}
					onChange={handleChange}
					type="text"
					name="phone"
					placeholder="phone"
				/>
			</form>
		</div>
	);
}

export default EditContactForm;
