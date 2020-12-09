import React from 'react';
import ContactsItem from './ContactsItem';

const ContactsList = ({ contacts, deleteContact }) => {
  if (contacts.length) {
    return (
      <ul className="contactList">
        {contacts.map(contact => (
          <ContactsItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  } else {
    return <h3>Add new contact</h3>;
  }
};

export default ContactsList;
