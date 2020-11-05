import React from 'react';
import { connect } from 'react-redux';
import { toggleEditContact } from '../actions';

function EditContact({ toggleEditContact }) {
	function handleClick() {
		toggleEditContact({
			type: 'TOGGLE_EDIT_CONTACT',
		});
	}
	return <button onClick={handleClick}>Edit</button>;
}

export default connect(null, { toggleEditContact })(EditContact);
