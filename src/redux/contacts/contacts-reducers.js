import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, updateFilter } from './contacts-action';

const items = createReducer([], {
  [addContacts]: (state, { payload }) => [payload, ...state],
  [deleteContacts]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
