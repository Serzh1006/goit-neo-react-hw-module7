import Contact from "../Contact/Contact";
import { visibleContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";
import css from "./contactlist.module.css";

const ContactList = () => {
  const contactsFilters = useSelector(visibleContacts);

  return (
    <ul className={css.listContacts}>
      {contactsFilters.map((contact) => {
        return <Contact key={contact.id} data={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
