/** @format */

import { getSuggestedQuery } from '@testing-library/dom';
import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const handleOnChange = (txt) => {
    setText(txt);
    getQuery(txt);
  };

  return (
    <section className='search'>
      <input
        type='text'
        className='form-control'
        placeholder='Search Character'
        value={text}
        onChange={(e) => handleOnChange(e.target.value)}
        autoFocus
        autoComplete='off'
      />
    </section>
  );
};

export default Search;
