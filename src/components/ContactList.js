import React from 'react';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import styles from '../components/contactList.module.css';

//map over contacts passed from App and render each contact as component
function ContactList({ contactList }) {
	return (
		<div className={styles.contactlist__container}>
			{contactList.length > 0 ? (
				contactList.map((contact, index) => (
					<ContactCard key={index} contact={contact} />
				))
			) : (
				<p>No Contacts!</p>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	console.log(state);
	return { contactList: state };
};

export default connect(mapStateToProps)(ContactList);
