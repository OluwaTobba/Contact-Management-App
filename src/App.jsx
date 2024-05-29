import { useState, useEffect } from 'react'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList'

function App() {

  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    contact.id = Date.now();
    setContacts([...contacts, contact]);
  };

  const editContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div className="app">
        <h1>Contact Management App</h1>
        <ContactForm
          addContact={addContact}
          editContact={editContact}
          contactToEdit={contactToEdit}
          setContactToEdit={setContactToEdit}
        />
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          setContactToEdit={setContactToEdit}
        />
      </div>
    </>
  );
}

export default App
