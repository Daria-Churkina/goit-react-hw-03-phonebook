import React, { Component } from 'react';
import ContactsList from './Components/ContactsList';
import FilterInput from './Components/FilterInput';
import PhoneBook from './Components/PhoneBook';
import Section from './Components/Section';
import './Components/styles.css';
import storage from './Components/storage';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const loadContacts = storage.load('contacts');
    if (loadContacts) {
      this.setState({ contacts: loadContacts });
    }
  }

  componentDidUpdate() {
    const { contacts } = this.state;
    storage.save('contacts', contacts);
  }

  getContactInfo = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterInput = e => {
    this.setState({ filter: e.target.value });
  };

  contactsFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
    return (
      <div className="main-container">
        <Section title="Phonebook">
          <PhoneBook
            getContactInfo={this.getContactInfo}
            contacts={this.state.contacts}
          />
        </Section>
        <Section title="Contacts">
          <FilterInput
            filter={this.state.filter}
            filterInput={this.filterInput}
          />
          <ContactsList
            contacts={this.contactsFilter()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
