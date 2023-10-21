import { useState } from 'react';
import ContactForm from './Form/ContactForm';
export const App = () => {
  const [contacts, setContacts] = useState({
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
  });

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setContacts({ [name]: value });
  // };

  // const handleSubmit = (name, number) => {
  //   const { contacts } = contacts();
  // };

  const getContact = data => {
    contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => {
          return [...prevState, data];
        });
  };
  return (
    <div>
      <ContactForm />
      <section>
        <h2>Contacts</h2>
        <ul>
          <li>
            <p>{contacts.name}</p>
            <p>{contacts.number}</p>
          </li>
        </ul>
      </section>
    </div>
  );
};
