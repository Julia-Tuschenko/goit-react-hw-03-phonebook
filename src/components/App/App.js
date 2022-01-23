import React from "react";
import Form from "../Form/Form";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { Title, TitleContacts, Section, Container } from "./App.styled";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      if (
        contacts.some(
          (contact) =>
            contact.name.trim().toLowerCase() === name.trim().toLowerCase()
        )
      ) {
        return alert(`${name} is already in contacts!`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  changeFitler = (e) => {
    this.setState({ filter: e.target.value });
  };

  getContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    console.log("App componentDidMount");

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate");

    if (this.state.contacts !== prevState.contacts) {
      console.log("Обновилось поле contacts");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const getContacts = this.getContact();

    console.log("App render");
    return (
      <Container>
        <Section title="Phonebook">
          <Title>Phonebook</Title>
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <TitleContacts>Contacts</TitleContacts>
          <Filter value={this.state.filter} onChange={this.changeFitler} />
          <ContactList
            contacts={getContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
