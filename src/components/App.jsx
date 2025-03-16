import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { selectContacts } from "../redux/contactsSlice";
import { useSelector } from "react-redux";
import css from "./app.module.css";

const App = () => {
  const contactsFromState = useSelector(selectContacts);

  return (
    <div>
      <h1 className={css.primaryTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contactsFromState.contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <p className={css.messageList}>No records found yet!</p>
      )}
    </div>
  );
};

export default App;
