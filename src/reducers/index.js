const initialState = {
	contactList: [],
	toggleEditContact: false,
};

function rootReducer(state = initialState, action) {
	if (action.type === 'ADD_CONTACT') {
		//check for existing email already in state
		const contactExists = state.contactList.some(
			(contact) => contact.email === action.payload.email
		);
		if (!contactExists) {
			return Object.assign({}, state, {
				contactList: state.contactList.concat(action.payload),
			});
		}
	}

	if (action.type === 'DELETE_CONTACT') {
		return {
			...state,
			contactList: state.contactList.filter(
				(contact) => contact.email !== action.payload.contact
			),
		};
	}

	if (action.type === 'TOGGLE_EDIT_CONTACT') {
		return {
			...state,
			toggleEditContact: !state.toggleEditContact,
		};
	}
	return state;
}

export default rootReducer;
