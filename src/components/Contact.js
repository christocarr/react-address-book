import React from 'react';

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
			<h3>{name}</h3>
			<p>{addressLineOne}</p>
			<p>{addressLineTwo}</p>
			<p>{city}</p>
			<p>{postcode}</p>
			<p>{telephone}</p>
			<p>{email}</p>
		</div>
	);
}

export default Contact;
