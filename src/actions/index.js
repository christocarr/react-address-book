//action creator
export const selectedAddress = (address) => {
	return {
		type: 'ADDRESS_SELECTED',
		payload: address,
	};
};

export const addContact = (contact) => {
	return {
		type: 'NEW_CONTACT',
		payload: contact,
	};
};
