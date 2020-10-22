import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';
import PostcodeSearch from './PostcodeSearch';

function ContactForm(props) {
	const [postcodeSearch, setPostcodeSearch] = useState('');
	const [contactName, setContactName] = useState('');
	const [contactFirstLine, setContactFirstLine] = useState('');
	const [contactSecondLine, setContactSecondLine] = useState('');
	const [contactTown, setContactTown] = useState('');
	const [contactCounty, setContactCounty] = useState('');
	const [contactPostcode, setContactPostcode] = useState('');
	const [contactTelephone, setContactTelephone] = useState('');
	const [contactEmail, setContactEmail] = useState('');

	useEffect(() => {
		if (props.address) {
			const newAddress = props.address.value.split(',');
			setContactFirstLine(newAddress[0]);
			setContactSecondLine(newAddress[1]);
			setContactTown(newAddress[5]);
			setContactCounty(newAddress[6]);
			setContactPostcode(postcodeSearch);
		}
	}, [postcodeSearch, props]);

	function handleFormSubmit(e) {
		e.preventDefault();
		props.addContact({
			name: contactName,
			address: {
				firstLine: contactFirstLine,
				secondLine: contactSecondLine,
				town: contactTown,
				county: contactCounty,
				postcode: contactPostcode,
			},
			telephone: contactTelephone,
			email: contactEmail,
		});
		setContactName('');
		setContactFirstLine('');
		setContactSecondLine('');
		setContactTown('');
		setContactCounty('');
		setContactPostcode('');
		setContactTelephone('');
		setContactEmail('');
		console.log(props);
	}

	return (
		<div>
			<PostcodeSearch setPostcodeSearch={setPostcodeSearch} />
			<form onSubmit={handleFormSubmit}>
				<input
					value={contactName}
					onChange={(e) => setContactName(e.target.value)}
					type="text"
					name="name"
					placeholder="name"
				/>
				<input
					value={contactFirstLine}
					onChange={(e) => setContactFirstLine(e.target.value)}
					type="text"
					name="firstLine"
					placeholder="first line"
				/>
				<input
					value={contactSecondLine}
					onChange={(e) => setContactSecondLine(e.target.value)}
					type="text"
					name="secondLine"
					placeholder="second line"
				/>
				<input
					value={contactTown}
					onChange={(e) => setContactTown(e.target.value)}
					type="text"
					name="town"
					placeholder="town"
				/>
				<input
					value={contactCounty}
					onChange={(e) => setContactCounty(e.target.value)}
					type="text"
					name="county"
					placeholder="county"
				/>
				<input
					value={contactPostcode}
					onChange={(e) => setContactPostcode(e.target.value)}
					type="text"
					name="postcode"
					placeholder="postcode"
				/>
				<input
					value={contactTelephone}
					onChange={(e) => setContactTelephone(e.target.value)}
					type="text"
					name="telephone"
					placeholder="telephone"
				/>
				<input
					value={contactEmail}
					onChange={(e) => setContactEmail(e.target.value)}
					type="text"
					name="email"
					placeholder="email"
				/>
				<button>Add contact</button>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { address: state.selectedAddress };
};

export default connect(mapStateToProps, { addContact })(ContactForm);
