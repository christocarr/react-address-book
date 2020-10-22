import React from 'react';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import styles from '../components/contactList.module.css'

//map over contacts passed from App and render each contact as component
function ContactList({ contactList }) {
	console.log(contactList);
	return (
		<div className={styles.contactlist__container}>
			{contactList.map((contact, index) => (
				<ContactCard key={index} contact={contact} />
			))}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { contactList: state.addContact };
};

export default connect(mapStateToProps)(ContactList);
