import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class PhoneBook extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  contactsVerification = () => {
    return this.props.contacts.some(
      contact => contact.name === this.state.name,
    );
  };

  submitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (this.contactsVerification()) {
      alert('!!!');
    } else {
      const newContact = { id: uuidv4(), name, number };
      this.props.getContactInfo(newContact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label className="label name">
          Enter name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label className="label number">
          Еnter number (7 to 9 digits)
          <input
            type="tel"
            value={this.state.number}
            name="number"
            onChange={this.handleChange}
            pattern="[0-9]{7,9}"
            title="7 to 9 digits allowed"
          />
        </label>
        <button type="submit" className="addContact">
          Add contact
        </button>
      </form>
    );
  }
}

export default PhoneBook;
