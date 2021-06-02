import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateContact, toggleEditContact } from '../actions';

function EditContactForm({ contact, updateContact, toggleEditContact }) {
  const [updatedContact, setUpdatedContact] = useState({
    name: '',
    firstLine: '',
    secondLine: '',
    town: '',
    county: '',
    postcode: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setUpdatedContact(contact);
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact({ ...updatedContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(updatedContact);
    toggleEditContact({
      type: 'TOGGLE_EDIT_CONTACT',
      editingContact: updatedContact,
    });
  };

  const handleCancel = () => {
    toggleEditContact({
      type: 'TOGGLE_EDIT_CONTACT',
      editingContact: contact,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={updatedContact.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="name"
        required
      />
      <input
        value={updatedContact.firstLine}
        onChange={handleChange}
        type="text"
        name="firstLine"
        placeholder="first line"
      />
      <input
        value={updatedContact.secondLine}
        onChange={handleChange}
        type="text"
        name="secondLine"
        placeholder="second line"
      />
      <input
        value={updatedContact.town}
        onChange={handleChange}
        type="text"
        name="town"
        placeholder="town"
      />
      <input
        value={updatedContact.county}
        onChange={handleChange}
        type="text"
        name="county"
        placeholder="county"
      />
      <input
        value={updatedContact.postcode}
        onChange={handleChange}
        type="text"
        name="postcode"
        placeholder="postcode"
      />
      <input
        value={updatedContact.email}
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="email"
        required
      />
      <input
        value={updatedContact.phone}
        onChange={handleChange}
        type="text"
        name="phone"
        placeholder="phone"
      />
      <div className="w-full flex justify-evenly">
        <button type="submit">Update</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default connect(null, { updateContact, toggleEditContact })(
  EditContactForm
);
