import React from 'react';
import { connect } from 'react-redux';
import { editContact } from '../actions';

function EditContact({ editContact }) {
	function handleClick() {
		editContact({
			type: 'EDIT_CONTACT',
		});
	}
	return <button onClick={handleClick}>Edit</button>;
}

export default connect(null, { editContact })(EditContact);
