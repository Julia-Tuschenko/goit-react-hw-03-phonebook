import React, { Component } from "react";
// import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import { Forma, LabelPhone, InputPhone, AddContact } from "./Form.styled";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handelChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Forma onSubmit={this.handelSubmit}>
        <LabelPhone htmlFor={this.nameId}>
          Name
          <InputPhone
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelPhone>

        <LabelPhone htmlFor={this.numberId}>
          Number
          <InputPhone
            type="tel"
            value={this.state.number}
            name="number"
            onChange={this.handelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelPhone>
        <AddContact type="submit">Add contact</AddContact>
      </Forma>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
