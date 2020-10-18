import React, { useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
	//set state to array which will update with objects
	const [contacts, setContacts] = useState([]);

	return (
		<div className="App">
			<header className="App-header"></header>
			<AddContact setContacts={setContacts} />
			<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
