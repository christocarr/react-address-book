import React from 'react';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';

//destructure props and render
function ContactCard({ contact }) {
	return (
		<div>
			<h3>{contact.name}</h3>
			<address>
				<p>
					{contact.firstLine}
					<br />
					{contact.secondLine}
					<br />
					{contact.town}
					<br />
					{contact.county}
					<br />
					{contact.postcode}
					<br />
				</p>
			</address>
			<p>
				{contact.email}
				<br />
				{contact.phone}
			</p>
			<div>
				<EditContact contact={contact} />
				<DeleteContact contact={contact} />
			</div>
		</div>
	);
}

export default ContactCard;
