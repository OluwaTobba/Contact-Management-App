import React, { useState, useEffect } from 'react';
import './ContactForm.css';

function ContactForm({ addContact, editContact, contactToEdit, setContactToEdit }) {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    } else {
      setContact({ name: '', email: '', phone: '' });
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactToEdit) {
      editContact(contact);
    } else {
      addContact(contact);
    }
    setContact({ name: '', email: '', phone: '' });
    setContactToEdit(null);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">{contactToEdit ? 'Update' : 'Add'} Contact</button>
    </form>
  );
}

export default ContactForm;
