const initialState = {
	contactList: [],
	toggleEditContact: false,
	showModal: false,
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

	if (action.type === 'TOGGLE_MODAL') {
		return {
			...state,
			showModal: !state.showModal
		}
	}

	if (action.type === 'UPDATE_CONTACT') {
		return Object.assign({}, state, {
			contactList: state.contactList.map((contact) =>
				contact.date === action.payload.date ? action.payload : contact
			),
		});
	}
	return state;
}

export default rootReducer;
