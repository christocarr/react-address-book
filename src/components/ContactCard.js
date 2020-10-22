import React from 'react';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';

//destructure props and render
function ContactCard({ contact }) {
	console.log(contact);
	return (
		<div>
			<address>
				<h3>{contact.name}</h3>
				<p>
					{contact.address.firstLine}
					<br />
					{contact.address.secondLine}
					<br />
					{contact.address.town}
					<br />
					{contact.address.county}
					<br />
					{contact.address.postcode}
					<br />
					{contact.telephone}
					<br />
					{contact.email}
				</p>
			</address>
			<EditContact />
			<DeleteContact />
		</div>
	);
}

export default ContactCard;
