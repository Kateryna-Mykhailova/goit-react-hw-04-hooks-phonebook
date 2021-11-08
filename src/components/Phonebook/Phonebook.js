import React from 'react';
import styles from '../Phonebook/Phonebook.module.css';

const Phonebook = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contact_list}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.contact_item} key={id}>
        <p className={styles.contact_name}>{name}:</p>
        <p>{number}</p>
        <button
          className={styles.contact_delate_btn}
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default Phonebook;
