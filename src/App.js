/** @format */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/ui/Header.jsx';
import CharactersGrid from './component/characters/CharactersGrid.jsx';
import Search from './component/ui/Search';

const App = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItem(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className='App'>
      <Header />
      <Search getQuery={(txt) => setQuery(txt)} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
