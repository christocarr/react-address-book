import React from 'react';
import Contact from '../components/Contact';

//map over contacts and render each contact as component
function ContactList({ contacts }) {
	return (
		<div>
			{contacts.map(({ name, address, telephone, email }, index) => (
				<Contact
					key={index}
					name={name}
					addressLineOne={address.addressLineOne}
					addressLineTwo={address.addressLineTwo}
					city={address.city}
					county={address.county}
					postcode={address.postcode}
					telephone={telephone}
					email={email}
				/>
			))}
		</div>
	);
}

export default ContactList;
