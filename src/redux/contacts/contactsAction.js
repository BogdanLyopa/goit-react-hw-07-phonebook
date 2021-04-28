import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', contact => ({
  payload: {
    id: uuidv4(),
    ...contact,
  },
}));

const removeContact = createAction('contacts/remove');

const changedFilter = createAction('contacts/filterChanged');

export default {
  addContact,
  removeContact,
  changedFilter,
};
