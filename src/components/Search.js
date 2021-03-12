import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import GithubContext from '../context/github/githubContext';

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          onChange={handleChange}
          value={text}
          type='text'
          name='text'
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {Boolean(users.length) && (
        <button className='btn btn-block btn-light' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
