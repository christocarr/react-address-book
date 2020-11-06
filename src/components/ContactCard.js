import React from 'react';
import { connect } from 'react-redux';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';
import EditContactForm from './EditContactForm';
import styles from './contactCard.module.css';

//destructure props and render
function ContactCard({ contact, toggleEditContact }) {
	return toggleEditContact ? (
		<EditContactForm contact={contact} />
	) : (
		<div className={styles.contact__card_container}>
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
			<div className={styles.button__container}>
				<EditContact contact={contact} />
				<DeleteContact contact={contact} />
			</div>
		</div>
	);
}

const mapStateToProps = ({ toggleEditContact }) => {
	return {
		toggleEditContact,
	};
};

export default connect(mapStateToProps)(ContactCard);
