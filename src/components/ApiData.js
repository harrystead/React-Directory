import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import Person from './TableData';

function App() {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://randomuser.me/api/?results=12'
      )
      .then(res => {
        setPeople(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

//   const filteredPeople = people.filter(person =>
//     person.email.toLowerCase().includes(search.toLowerCase())
//   );

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search an Employee</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {people.map(person => {
        return (
          <Person
          key={person.phone}
            email={person.email}
          />
        );
      })}
    </div>
  );
}

export default App;