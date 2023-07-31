import css from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, del }) => {
 
  const deleteId = (Id) => {
    del(Id);
  };

  return (
    <div>
      <ul>
        {contacts?.map(({ name, number, id }) => {
          return (
            <div className={css.container} key={id}>
              <li>
                {name}: {number}
              </li>
              <button
                className={css.BtnToDelete}
                data-id={id}
                onClick={() => deleteId(id)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  del: PropTypes.func,
};

export default ContactList;