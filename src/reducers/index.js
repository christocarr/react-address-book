const initialState = {
	contactList: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_CONTACT':
			//check for existing email already in state
			const contactExists = state.contactList.some(
				(contact) => contact.email === action.payload.email
			);
			if (!contactExists) {
				return Object.assign({}, state, {
					contactList: state.contactList.concat(action.payload),
				});
			} else {
				return state;
			}
		case 'DELETE_CONTACT':
			return {
				...state,
				contactList: state.contactList.filter(
					(contact) => contact.email !== action.payload.contact
				),
			};
		case 'TOGGLE_EDIT_CONTACT':
			const { editingContact } = action.payload;
			const newContact = {
				...editingContact,
				editing: !editingContact.editing,
			};
			return Object.assign({}, state, {
				contactList: state.contactList.map((contact) =>
					contact.date === editingContact.date ? newContact : contact
				),
			});
		case 'UPDATE_CONTACT':
			return Object.assign({}, state, {
				contactList: state.contactList.map((contact) =>
					contact.date === action.payload.date ? action.payload : contact
				),
			});
		default:
			return state;
	}
}

export default rootReducer;
