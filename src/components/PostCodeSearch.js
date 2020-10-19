import React, { useState, useEffect } from 'react';

function PostCodeSearch() {
	const [search, setSearch] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const APIKEY = 'HF5s4vq7pEupvXLhw7uCWg28754';
		const addresses = async () => {
			let res = await fetch(
				`https://api.getAddress.io/find/${search}?api-key=${APIKEY}`
			);
			console.log(res);
			let data = await res.json();
			console.log(data);
		};

		addresses();
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
			</form>
		</div>
	);
}

export default PostCodeSearch;
