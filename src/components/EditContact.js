import React from 'react';
import { connect } from 'react-redux';
import { toggleEditContact, toggleModal } from '../actions';

function EditContact({ toggleEditContact, toggleModal }) {
	function handleClick() {
		toggleEditContact({
			type: 'TOGGLE_EDIT_CONTACT',
		});
		toggleModal()
	}
	return <button onClick={handleClick}>Edit</button>;
}

export default connect(null, { toggleEditContact, toggleModal })(EditContact);
