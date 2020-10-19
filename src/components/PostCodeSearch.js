import React, { useState, useEffect } from 'react';

function PostCodeSearch() {
	const [search, setSearch] = useState('');
	const [addresses, setAddresses] = useState([])

	function handleSubmit(e) {
		e.preventDefault();

		const APIKEY = 'HF5s4vq7pEupvXLhw7uCWg28754';

		const getAddresses = async () => {
			let res = await fetch(
				`https://api.getAddress.io/find/${search}?api-key=${APIKEY}`
			);
			let data = await res.json();
			console.log(data.addresses);
			setAddresses(data.addresses)
		};

		getAddresses()
	}

	useEffect(() => {

	}, [])

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					type="text"
				/>
				<button>Search</button>
				{addresses.length > 0 &&
					<select>
						{addresses.map((v, i) => (
							<option key={i}>{v}</option>
						))}
					</select>
				}
			</form>
		</div>
	);
}

export default PostCodeSearch;
