import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Conteiner/Conteiner';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSabmitHendler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  ChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  Delite = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== todoId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const NomrmalizeFilter = filter.toLowerCase();
    const VilibleTodos = contacts.filter(cont =>
      cont.name.toLowerCase().includes(NomrmalizeFilter)
    );
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSabmitHendler} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.ChangeFilter} />
          <ContactList contacts={VilibleTodos} OnDelite={this.Delite} />
        </Container>
      </>
    );
  }
}

export default App;