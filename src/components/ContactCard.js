import React from 'react';
import EditContact from './EditContact'
import DeleteContact from './DeleteContact'

//destructure props and render 
function ContactCard({
	name,
	addressLineOne,
	addressLineTwo,
	city,
	county,
	postcode,
	telephone,
	email,
}) {
	return (
		<div>
		<address>
			<h3>{name}</h3>
			<p>{addressLineOne}</p>
			<p>{addressLineTwo}</p>
			<p>{city}</p>
			<p>{county}</p>
			<p>{postcode}</p>
			<p>{telephone}</p>
			<p>{email}</p>
		</address>
			<EditContact />
			<DeleteContact />
		</div>
	);
}

export default ContactCard;
