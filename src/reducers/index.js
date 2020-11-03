const initialState = {
	contactList: [],
	editContact: false
}

function rootReducer(state = initialState, action) {
	if (action.type === 'ADD_CONTACT') {
		//check for existing email already in state
		const contactExists = state.contactList.some(
			(contact) => contact.email === action.payload.email
		);
		if (!contactExists) {
			return Object.assign({}, state, {
				contactList: state.contactList.concat(action.payload)
			})
		}
	}

	if (action.type === 'DELETE_CONTACT') {
		return {
			...state,
			contactList: state.contactList.filter((contact) => contact.email !== action.payload.contact)
		}
	}
	return state;
}

export default rootReducer;
