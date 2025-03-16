import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import css from "./contactlist.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const normilizedFilter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((el) =>
    el.name.toLowerCase().includes(normilizedFilter.filter)
  );
  return (
    <ul className={css.listContacts}>
      {filterContacts.map((contact) => {
        return <Contact key={contact.id} data={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
