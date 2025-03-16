import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./contact.module.css";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className={css.wrapContact}>
        <div className={css.nameWrap}>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          className={css.btnDelete}
          onClick={() => dispatch(deleteContact(id))}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
