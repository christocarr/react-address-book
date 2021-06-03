import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions';

function ContactForm({ addContact, contactList }) {
  const [contact, setNewContact] = useState({
    name: '',
    firstLine: '',
    secondLine: '',
    town: '',
    county: '',
    postcode: '',
    email: '',
    phone: '',
    date: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //check if there is a contact with entered email
    if (contactList.length > 0) {
      const item = contactList.find((item) => item.email === contact.email);
      //if entered email exists then return an error message
      if (item.email === contact.email)
        setError(
          `A contact with the email ${item.email} is already in your contact list`
        );
    }

    //send contact to store
    addContact({ ...contact, date: Date.now(), editing: false });

    setNewContact({
      name: '',
      firstLine: '',
      secondLine: '',
      town: '',
      county: '',
      postcode: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        value={contact.name}
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        placeholder="name"
        required
      />
      <fieldset>
        <legend>Address</legend>
        <input
          value={contact.firstLine}
          onChange={handleChange}
          type="text"
          name="firstLine"
          placeholder="first line"
        />
        <input
          value={contact.secondLine}
          onChange={handleChange}
          type="text"
          name="secondLine"
          placeholder="second line"
        />
        <input
          value={contact.town}
          onChange={handleChange}
          type="text"
          name="town"
          placeholder="town"
        />
        <input
          value={contact.county}
          onChange={handleChange}
          type="text"
          name="county"
          placeholder="county"
        />
        <input
          value={contact.postcode}
          onChange={handleChange}
          type="text"
          name="postcode"
          placeholder="postcode"
        />
      </fieldset>

      <label htmlFor="email">Email</label>
      <input
        value={contact.email}
        onChange={handleChange}
        type="text"
        id="email"
        name="email"
        placeholder="email"
        required
      />
      <label htmlFor="phone">Phone number</label>
      <input
        value={contact.phone}
        onChange={handleChange}
        type="text"
        id="phone"
        name="phone"
        placeholder="phone"
      />
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <button className="btn">Add contact</button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    contactList: state.contactList,
  };
}

export default connect(mapStateToProps, { addContact })(ContactForm);
