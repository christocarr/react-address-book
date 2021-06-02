import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../actions';

function DeleteContact({ deleteContact, contact }) {
  function handleClick() {
    deleteContact({
      type: 'DELETE_CONTACT',
      contact: contact.email,
    });
  }

  return (
    <button onClick={handleClick} className="bg-red-500 hover:bg-red-700">
      Delete
    </button>
  );
}

export default connect(null, { deleteContact })(DeleteContact);
