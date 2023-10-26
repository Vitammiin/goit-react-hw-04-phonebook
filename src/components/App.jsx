import { useState } from 'react';
import ContactForm from './Form/ContactForm';
import ContactsList from './ContactsList/ContactsList';
export const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = data => {
    //  добавление нового контакта в состояние contacts
    setContacts(prevState => {
      return [...prevState, data];
    });
  };

  const handleRemove = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>My Contact List</h1>
      <ContactForm onSubmit={handleSubmit} />
      <div>
        <ContactsList contacts={contacts} handleRemove={handleRemove} />
      </div>
    </div>
  );
};
