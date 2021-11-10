import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Phonebook from './components/Phonebook/Phonebook';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addNewContact = newContact => {
    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} already exists`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  // setContacts(prevState => [...prevState, {}])

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();

  useEffect(() => {
    console.log('oполучаю с лс');
    const localContacts = localStorage.getItem('contacts');
    console.log(localContacts);
    const parseLocalContacts = JSON.parse(localContacts);

    if (parseLocalContacts) {
      setContacts(parseLocalContacts);
    }
  }, []);

  useEffect(() => {
    console.log('записываю в лс');
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Phonebook contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
