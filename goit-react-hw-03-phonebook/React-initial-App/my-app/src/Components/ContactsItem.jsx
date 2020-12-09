import React from 'react';

const ContactsItem = ({ contact: { id, name, number }, deleteContact }) => (
  <li className="contactItem">
    <p>
      {name} : {number}
    </p>
    <button id={id} onClick={deleteContact} className="deleteContactButton">
      Delete
    </button>
  </li>
);

export default ContactsItem;
