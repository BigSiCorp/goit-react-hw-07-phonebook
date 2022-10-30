import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { selectContacts } from '../../redux/contactsSelector';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'number':
        setNumber(value);
        break;

      case 'name':
        setName(value);
        break;

      default:
        return;
    }
  };
  const oldContacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const newContactData = {
      name,
      number,
    };

    if (
      oldContacts.some(
        contact =>
          contact.name.toLowerCase() === newContactData.name.toLowerCase()
      )
    ) {
      alert(`contact with ${newContactData.name} has already been created`);
      return;
    }

    dispatch(addContact(newContactData));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.formMain}>
      <label htmlFor={nanoid()}>Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={nanoid()}
        className={s.formInput}
        required
      />
      <br />
      <label htmlFor={nanoid()}>Number</label>
      <br />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="  number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={nanoid()}
        required
      />
      <br />
      <button className={s.btnForm}>Add contact</button>
    </form>
  );
};
