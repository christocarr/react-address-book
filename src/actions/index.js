//action creator
export const selectedAddress = (address) => {
	return {
		type: 'ADDRESS_SELECTED',
		payload: address,
	};
};

export const addContact = (newContact) => {
	return {
		type: 'ADD_CONTACT',
		payload: newContact,
	};
};

export const deleteContact = (contact) => {
	return {
		type: 'DELETE_CONTACT',
		payload: contact,
	};
};

export const editContact = () => {
	return {
		type: 'EDIT_CONTACT',
	};
};
