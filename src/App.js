import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';
import Loader from 'react-loader-spinner';

import contactsOperation from './redux/contacts/contactsOperations';
import {
  getLoading,
  getContacts,
  getError,
} from './redux/contacts/contactsSelectors';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './styles.css';
class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

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
      <CSSTransition
        in={true}
        appear={true}
        classNames="scale"
        timeout={500}
        unmountOnExit
      >
        <div className="app">
          <CSSTransition
            in={true}
            appear={true}
            classNames="fade"
            timeout={2000}
            unmountOnExit
          >
            <h1 className="title">Phonebook</h1>
          </CSSTransition>
          <Form onCheckUnique={this.handleCheckUniqueContact} />

          {this.props.contacts.length > 0 && <Filter />}
          {this.props.isLoading && (
            <Loader
              className="loader"
              type="TailSpin"
              color="cornflowerblue"
              height={50}
              width={50}
            />
          )}
          {this.props.error && (
            <p className="error-message">{this.props.error.message}</p>
          )}
          <ContactsList />
        </div>
      </CSSTransition>
    );
  }
}
const mapStateToProps = state => ({
  contacts: getContacts(state),
  isLoading: getLoading(state),
  error: getError(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
