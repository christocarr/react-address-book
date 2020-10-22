import React, { useState } from 'react';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList';

function App() {
	//set state to array which will update with contact objects
	const [contacts, setContacts] = useState([]);


	return (
		<div className="App">
			<header>
				<h1>Address Book</h1>
			</header>
		<ContactForm />
		<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
