import React, { useState } from 'react';

function PostCodeSearch({ setAddressSelect, setPostcode }) {
	const [search, setSearch] = useState('');
	const [addresses, setAddresses] = useState([]);

	// fetch addresses from api on postcode form submit
	function handleSubmit(e) {
		e.preventDefault();

		const APIKEY1 = 'HF5s4vq7pEupvXLhw7uCWg28754';
		const APIKEY2 = 'HVgKKzu4o0as4MlYxN64XA28757';

		const getAddresses = async () => {
			let res = await fetch(
				`https://api.getAddress.io/find/${search}?api-key=${APIKEY1}`
			);
			let data = await res.json();
			//set addresses to addresses array
			setAddresses(data.addresses);
		};

		getAddresses();
		//pass postcode to add contact component
		setPostcode(search);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					type="text"
				/>
				<button>Search</button>
				{/* only when address array is not empty display select with option from address array */}
				{addresses.length > 0 && (
					<select onChange={(e) => setAddressSelect(e.target.value)}>
						<option value="">select your address</option>
						{addresses.map((v, i) => (
							<option key={i}>{v}</option>
						))}
					</select>
				)}
			</form>
		</div>
	);
}

export default PostCodeSearch;
