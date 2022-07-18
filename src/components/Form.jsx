import React, { useState } from 'react';

import './styles/Form.css';

const initialForm = {
  artist: '',
  song:''
}

export default function Form ({ handleSearch }) {
  
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.artist || !form.song) {
      alert('Incomplete data');
      return;
    }

    handleSearch(form);
    setForm(initialForm)
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit} >
        <input className='form__input' type='text' name="song" placeholder='Song name' value={form.song} onChange={handleChange}/>
        <input className='form__input' type='text' name='artist' placeholder='Artist' value={form.artist} onChange={handleChange} />
        <input className='form__submit' type='submit' placeholder='Send'/>
      </form>
    </div>
  )
}
