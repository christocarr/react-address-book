import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import OpenFormButton from './components/OpenFormButton';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div className="container flex flex-col justify-center items-center mx-auto py-4 px-2">
      <header className="w-full mb-4 flex justify-center">
        <h1>Address Book</h1>
      </header>
      <main className="container flex flex-col justify-center items-center py-2">
        <OpenFormButton
          displayForm={displayForm}
          setDisplayForm={setDisplayForm}
        />
        {displayForm && <ContactForm />}

        <ContactList />
      </main>
    </div>
  );
}

export default App;
