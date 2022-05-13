import React, { Component } from 'react';
import s from './Form.module.css';
import PropTypes from 'prop-types';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);
    this.reset();
  };
  hendleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ contacts: [], name: '', number: '' });
  };
  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <p>Phonebook</p>
          <label className={s.title}>
            {' '}
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.hendleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={s.title}>
            number
            <input
              className={s.input}
              type="tel"
              value={this.state.number}
              onChange={this.hendleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br></br>
          <button className={s.button} type="submit">
            {' '}
            Add contact{' '}
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
export default Form;
