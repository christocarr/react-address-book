import React from 'react';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';
import styles from './contactCard.module.css';

//destructure props and render
function ContactCard({ contact }) {
	return (
		<div className={styles.contact__card_container}>
			<address>
				<h3>{contact.name}</h3>
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
					{contact.email}
					<br />
					{contact.phone}
				</p>
			</address>
			<EditContact contact={contact} />
			<DeleteContact />
		</div>
	);
}

export default ContactCard;
