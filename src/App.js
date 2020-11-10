import React from 'react';
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList';
import '../src/index.css'

function App() {

	return (
		<div className="App">
			<header>
				<h1>Address Book</h1>
			</header>
			<main>
				<ContactForm />
				<ContactList />
			</main>
		</div>
	);
}

export default App;
