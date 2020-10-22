import { combineReducers } from 'redux';

const selectedAddressReducer = (selectedAddress = null, action) => {
	if (action.type === 'ADDRESS_SELECTED') {
		return action.payload;
	}

	return selectedAddress;
};

const addContactReducer = (contactsList = [], action) => {
	if (action.type === 'NEW_CONTACT') {
		return [...contactsList, action.payload];
	}

	return contactsList;
};

export default combineReducers({
	selectedAddress: selectedAddressReducer,
	addContact: addContactReducer,
});
