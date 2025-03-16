import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filter.filter;
export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoading = (state) => state.contacts.contacts.isLoading;
export const selectError = (state) => state.contacts.contacts.error;

export const visibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filter) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
