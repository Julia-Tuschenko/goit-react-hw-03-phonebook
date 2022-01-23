import PropTypes from "prop-types";
import { ListItem, ListButton } from "./Contacts.styled";

const Contact = ({ name, number, onClick }) => (
  <ListItem>
    <p>
      {name}: {number}
    </p>
    <ListButton type="button" onClick={onClick}>
      Delete
    </ListButton>
  </ListItem>
);
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
