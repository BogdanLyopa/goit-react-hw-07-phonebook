import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactsAction';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changedFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
