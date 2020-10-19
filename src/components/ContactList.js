import React from 'react';
import ContactCard from './ContactCard';

//map over contacts passed from App and render each contact as component
function ContactList({ contacts }) {
	return (
		<div>
			{contacts.map(
				(
					{
						name,
						addressLineOne,
						addressLineTwo,
						city,
						county,
						postcode,
						telephone,
						email,
					},
					index
				) => (
					<ContactCard
						key={index}
						name={name}
						addressLineOne={addressLineOne}
						addressLineTwo={addressLineTwo}
						city={city}
						county={county}
						postcode={postcode}
						telephone={telephone}
						email={email}
					/>
				)
			)}
		</div>
	);
}

export default ContactList;
