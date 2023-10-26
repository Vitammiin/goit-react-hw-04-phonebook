import { useState } from 'react';
import css from '../style.module.css';
const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            <p>Name :</p>
            <input
              type="text"
              value={name}
              onChange={handleChangeName}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <p>Number:</p>
            <input
              type="text"
              value={number}
              onChange={handleChangeNumber}
              required
            />
          </label>
        </div>
        <div>
          <button className={css.add} type="submit">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
