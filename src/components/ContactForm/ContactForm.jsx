import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../../components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  hendelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  hendleSabmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.hendleSabmit}>
          <label className={css.label}>
            Name
            <input
              className={css.contact_inp}
              onChange={this.hendelChange}
              value={this.state.name}
              type="text"
              name="name"
              id='name'
              autoComplete='on'
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className="lable">
            Number
            <input
              className={css.contact_inp}
              onChange={this.hendelChange}
              value={this.state.number}
              type="tel"
              name="number"
              id='number'
              autoComplete='on'
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.sabmit_contact} type="sabmit">
            add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};