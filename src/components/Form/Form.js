import React, { useState } from 'react';
import s from './Form.module.css';
import PropTypes from 'prop-types';

export default function Form({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit({ name, number });
    reset();
  };

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <p>Phonebook</p>
        <label className={s.title}>
          {' '}
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
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
            value={number}
            onChange={handleChangeNumber}
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
  // end function\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
}

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   render() {

//   }
// }

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
