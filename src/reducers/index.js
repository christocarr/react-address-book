function rootReducer(state = [], action) {
	if (action.type === 'ADD_CONTACT') {
		return [...state, action.payload];
	}

	if (action.type === 'DELETE_CONTACT') {
		return state.filter((contact) => contact.email !== action.payload.contact);
	}
	return state;
}

export default rootReducer;
