import React from 'react';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import Modal from './Modal'
import styles from '../components/contactList.module.css';

//map over contacts passed from App and render each contact as component
function ContactList({ contactList, showModal }) {
	return (
		<div className={styles.contactlist__container}>
			{contactList.length > 0 ? (
				contactList.map((contact, index) => (
					<ContactCard key={index} contact={contact} />
				))
			) : (
				<p>No Contacts!</p>
			)}
			{ showModal ? <Modal /> : null}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { 
		contactList: state.contactList,
		showModal: state.showModal
	};
};

export default connect(mapStateToProps)(ContactList);
