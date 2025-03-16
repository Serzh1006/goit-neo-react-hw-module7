import { createSlice } from "@reduxjs/toolkit";

const contactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter((el) => el.id !== payload);
    },
  },
});

export const selectContacts = (state) => state.contacts;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
