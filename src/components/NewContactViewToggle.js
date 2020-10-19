import React from 'react';

function NewContactViewToggle({ newContactView, setNewContactView }) {
	return (
		<h2 onClick={() => setNewContactView(!newContactView)}>New Contact +</h2>
	);
}

export default NewContactViewToggle;
