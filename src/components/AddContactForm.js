import React from 'react';

function AddContactForm({ handleSubmit, handleChange, newContact }) {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				value={newContact.name}
				name="name"
				type="text"
				onChange={handleChange}
				placeholder="name"
			/>
			<label htmlFor="firstLine">Address Line One</label>
			<input
				id="firstLine"
				value={newContact.addressLineOne}
				name="addressLineOne"
				type="text"
				onChange={handleChange}
				placeholder="first line"
			/>
			<label htmlFor="secondLine">Address Line Two</label>
			<input
				id="secondLine"
				value={newContact.addressLineTwo}
				name="secondLine"
				type="text"
				onChange={handleChange}
				placeholder="second line"
			/>
			<label htmlFor="city">Town/City</label>
			<input
				id="city"
				value={newContact.city}
				name="city"
				type="text"
				onChange={handleChange}
				placeholder="town/city"
			/>
			<label htmlFor="county">County</label>
			<input
				id="county"
				value={newContact.county}
				name="county"
				type="text"
				onChange={handleChange}
				placeholder="county"
			/>
			<label htmlFor="postcode">Postcode</label>
			<input
				id="postcode"
				value={newContact.postcode}
				name="postcode"
				type="text"
				onChange={handleChange}
				placeholder="postcode"
			/>
			<label htmlFor="telephone">Telephone</label>
			<input
				id="telephone"
				value={newContact.telephone}
				name="telephone"
				type="text"
				onChange={handleChange}
				placeholder="telephone"
			/>
			<label htmlFor="email">Email</label>
			<input
				id="email"
				value={newContact.email}
				name="email"
				type="text"
				onChange={handleChange}
				placeholder="email"
			/>
			<button>Add contact</button>
		</form>
	);
}

export default AddContactForm;
