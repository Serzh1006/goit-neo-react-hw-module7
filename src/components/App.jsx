import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";
import { selectLoading } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../services/contactsOps";
import css from "./app.module.css";

const App = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.primaryTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading ? (
        <div className={css.loader}>Loading your contacts...</div>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default App;
