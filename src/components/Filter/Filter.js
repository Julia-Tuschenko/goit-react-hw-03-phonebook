import PropTypes from "prop-types";
import { LabelContact, InputContact } from "./Filter.styled";

function Filter({ value, onChange }) {
  return (
    <LabelContact>
      Find contacts by name
      <InputContact type="text" value={value} onChange={onChange} />
    </LabelContact>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
