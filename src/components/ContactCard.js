import React from 'react';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';

//destructure props and render
function ContactCard({ contact }) {
  return (
    <div className="container flex flex-col max-w-xs p-4 rounded border border-gray-300">
      <h3>{contact.name}</h3>
      <address className="align-left">
        <p>
          {contact.firstLine}
          <br />
          {contact.secondLine}
          <br />
          {contact.town}
          <br />
          {contact.county}
          <br />
          {contact.postcode}
          <br />
        </p>
      </address>
      <p>
        {contact.email}
        <br />
        {contact.phone}
      </p>
      <div className="w-full flex justify-evenly">
        <EditContact contact={contact} />
        <DeleteContact contact={contact} />
      </div>
    </div>
  );
}

export default ContactCard;
