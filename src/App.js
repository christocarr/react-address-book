import React, { useState } from 'react';
import NewContactViewToggle from './components/NewContactViewToggle';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
	//set state to array which will update with contact objects
	const [contacts, setContacts] = useState([]);
	const [newContactView, setNewContactView] = useState(false);

	console.log(newContactView);

	return (
		<div className="App">
			<header>
				<h1>Address Book</h1>
			</header>
			<NewContactViewToggle
				newContactView={newContactView}
				setNewContactView={setNewContactView}
			/>
			{newContactView && <AddContact setContacts={setContacts} />}
			<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
