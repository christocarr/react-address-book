import React from 'react';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import EditContactForm from './EditContactForm';

function ContactList({ contactList }) {
  return (
    <div className="container flex flex-col justify-center items-center">
      {contactList.length > 0 ? (
        contactList.map((contact, index) =>
          contact.editing ? (
            <EditContactForm key={index} contact={contact} />
          ) : (
            <ContactCard key={index} contact={contact} />
          )
        )
      ) : (
        <p>No Contacts!</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contactList: state.contactList,
  };
};

export default connect(mapStateToProps)(ContactList);
