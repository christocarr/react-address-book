function rootReducer(state = [], action) {
	if (action.type === 'ADD_CONTACT') {
		//check for existing email already in state
		const contactExists = state.some(
			(contact) => contact.email === action.payload.email
		);
		if (!contactExists) {
			return [...state, action.payload];
		}
	}

	if (action.type === 'DELETE_CONTACT') {
		return state.filter((contact) => contact.email !== action.payload.contact);
	}
	return state;
}

export default rootReducer;
