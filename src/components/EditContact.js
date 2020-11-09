import React from 'react';
import { connect } from 'react-redux';
import { toggleEditContact, toggleModal } from '../actions';

function EditContact({ toggleEditContact, toggleModal, contact}) {
	function handleClick() {
		toggleEditContact({
			type: 'TOGGLE_EDIT_CONTACT',
			editingContact: contact
		});
		toggleModal()
	}
	return <button onClick={handleClick}>Edit</button>;
}

export default connect(null, { toggleEditContact, toggleModal })(EditContact);
