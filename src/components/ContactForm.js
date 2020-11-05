import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';
import styles from './contactForm.module.css';

function ContactForm({ addContact }) {
	const [contact, setNewContact] = useState({
		name: '',
		firstLine: '',
		secondLine: '',
		town: '',
		county: '',
		postcode: '',
		email: '',
		phone: '',
		date: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewContact({ ...contact, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//send contact to store
		addContact({ ...contact, date: Date.now() });
		setNewContact({
			name: '',
			firstLine: '',
			secondLine: '',
			town: '',
			county: '',
			postcode: '',
			email: '',
			phone: '',
		});
	};

	return (
		<div className={styles.form__container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					value={contact.name}
					onChange={handleChange}
					type="text"
					name="name"
					placeholder="name"
					required
				/>
				<input
					value={contact.firstLine}
					onChange={handleChange}
					type="text"
					name="firstLine"
					placeholder="first line"
				/>
				<input
					value={contact.secondLine}
					onChange={handleChange}
					type="text"
					name="secondLine"
					placeholder="second line"
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
				<button>Add contact</button>
			</form>
		</div>
	);
}

export default connect(null, { addContact })(ContactForm);
