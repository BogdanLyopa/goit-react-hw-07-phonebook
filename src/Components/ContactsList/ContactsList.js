import { connect } from 'react-redux';

import ContactsListItem from './ContactsListItem/ContactsListItem';
import contactsOperations from '../../redux/contacts/contactsOperations';
import { getVisibleContacts } from '../../redux/contacts/contactsSelectors';

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <>
      <h2 className="title">Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            {...contact}
            onRemove={() => onRemove(contact.id)}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactsOperations.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
