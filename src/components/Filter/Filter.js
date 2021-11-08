import React from 'react';
import styles from '../Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.form_name}>
    Find contacts by name
    <input
      className={styles.form_input}
      //  id={this.idFilter }
      name="filter"
      value={value}
      type="text"
      onChange={onChange}
      //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
  </label>
);

export default Filter;

// export class Filter extends Component{
//   state = {
//    filter: ''
//   };
// idFilter = uuid();

//     handleChange = e => {
//     const { name, value } = e.target;
//       this.setState({
//        [name]: value,
//       });
//       console.log(this.state.filter);
//     //      const {name} =  this.state
//     // const findContact = {
//     //   name
//     // };
//   // console.log('kjh');
//       // this.props.filterContacts(value);
//           this.props.filterContacts(this.state.filter);
//   };

//     render() {
//          const { filter} = this.state;
//       return (<div>
//           <label>Find contacts by name

//            <input
//        id={this.idFilter }
//        name="filter"
//        value={filter}
//        type="text"
//        onChange={this.handleChange}
//        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//        required
//        /></label></div>
//          )
//      }

// }

// <p>Find contacts by name</p>

//   <label htmlFor={this.idName}>Name</label>
//       <input
//         id={this.idName}
//         name="name"
//         value={this.state.name}
//         type="text"
//         onChange={this.handleChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required
//       />
