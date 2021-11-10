import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from '../Form/Form.module.css';

export default function Form({ addNewContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = {
  //   name: '',
  //   number: '',
  // };

  const idName = uuid();
  const idNumber = uuid();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
      id: uuid(),
    };

    addNewContact(newContact);

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form_name} htmlFor={idName}>
        Name
      </label>
      <input
        className={styles.form_input}
        id={idName}
        name="name"
        value={name}
        type="text"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <label className={styles.form_name} htmlFor={idNumber}>
        Number
      </label>
      <input
        className={styles.form_input}
        id={idNumber}
        name="number"
        value={number}
        type="text"
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button className={styles.form_btn} type="submit">
        Add
      </button>
    </form>
  );
}
