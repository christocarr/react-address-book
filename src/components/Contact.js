import React from 'react';
import EditContact from './EditContact'
import DeleteContact from './DeleteContact'

//destructure props and render 
function Contact({
	name,
	addressLineOne,
	addressLineTwo,
	city,
	postcode,
	telephone,
	email,
}) {
	return (
		<div>
		<div>
			<h3>{name}</h3>
			<p>{addressLineOne}</p>
			<p>{addressLineTwo}</p>
			<p>{city}</p>
			<p>{postcode}</p>
			<p>{telephone}</p>
			<p>{email}</p>
		</div>
			<EditContact />
			<DeleteContact />
		</div>
	);
}

export default Contact;
