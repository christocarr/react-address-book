import React, { useState } from 'react';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList';

function App() {

	return (
		<div className="App">
			<header>
				<h1>Address Book</h1>
			</header>
		<ContactForm />
		<ContactList />
		</div>
	);
}

export default App;
