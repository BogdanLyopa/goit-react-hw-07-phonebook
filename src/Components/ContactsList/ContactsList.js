import { connect } from 'react-redux';

import ContactsListItem from './ContactsListItem/ContactsListItem';
import actions from '../../redux/contacts/contactsAction';

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

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
