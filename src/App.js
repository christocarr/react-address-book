import React, { useState } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
	//set state to array which will update with objects
	const [contacts, setContacts] = useState([
		{
			name: 'name',
			address: {
				addressLineOne: 'Address Line One',
				addressLineTwo: 'Address Line Two',
				city: 'City',
				postCode: 'postcode',
			},
			telephone: '077878787',
			email: 'email@email.com',
		},
	]);

	return (
		<div className="App">
			<header className="App-header"></header>
			<AddContact setContacts={setContacts} />
			<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
