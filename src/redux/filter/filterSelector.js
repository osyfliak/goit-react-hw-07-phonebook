import { selectContacts } from 'redux/contact/contactsSelector';

export const selectFilter = state => state.filter;
export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const contact = selectContacts(state);
  return contact.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );
};
