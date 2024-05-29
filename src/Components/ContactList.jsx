import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './ContactList.css';

function ContactList({ contacts, deleteContact, setContactToEdit }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-card">
          <div className="contact-info">
            <h3>{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
          <div className="contact-actions">
            <button onClick={() => setContactToEdit(contact)} className="edit-button">
              <FaEdit />
            </button>
            <button onClick={() => deleteContact(contact.id)} className="delete-button">
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
