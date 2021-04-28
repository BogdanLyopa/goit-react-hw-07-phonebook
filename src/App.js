import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';

import './styles.css';
class App extends Component {
  handleCheckUniqueContact = name => {
    const { contacts } = this.props;
    const check = contacts.find(contact => {
      return contact.name === name;
    });
    if (check) {
      alert('Contact is already exist');
      return check;
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="title">Phonebook</h1>
        <Form onCheckUnique={this.handleCheckUniqueContact} />
        {this.props.contacts.length > 0 && <Filter />}
        <ContactsList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, null)(App);
