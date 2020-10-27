import React from 'react';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import styles from '../components/contactList.module.css'

//map over contacts passed from App and render each contact as component
function ContactList(props) {
	console.log(props)
	return (
		<div className={styles.contactlist__container}>
			{props.contactList ?
				props.contactList.map((contact, index) => (
					<ContactCard key={index} contact={contact} />
				))
				:
				<p>No Contacts!</p>
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { contactList: state.contacts };
};

export default connect(mapStateToProps)(ContactList);
