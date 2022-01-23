import PropTypes from "prop-types";
import Contact from "./Contact";
import { ListContact } from "./Contacts.styled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContact>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onClick={() => onDeleteContact(id)}
        />
      ))}
    </ListContact>
  );
};
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
