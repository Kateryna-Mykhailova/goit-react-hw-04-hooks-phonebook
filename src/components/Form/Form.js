import React from 'react';
import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import styles from '../Form/Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  idName = uuid();
  idNumber = uuid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      //   [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      name,
      number,
      id: uuid(),
    };

    this.props.addNewContact(newContact);

    this.resetForm();
  };

  resetForm = () => {
    // this.setState({...this.state});
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.form_name} htmlFor={this.idName}>
          Name
        </label>
        <input
          className={styles.form_input}
          id={this.idName}
          name="name"
          value={name}
          type="text"
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label className={styles.form_name} htmlFor={this.idNumber}>
          Number
        </label>
        <input
          className={styles.form_input}
          id={this.idNumber}
          name="number"
          value={number}
          type="text"
          onChange={this.handleChange}
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
}


