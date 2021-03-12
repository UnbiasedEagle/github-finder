import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ login, avatar_url, html_url }) => {
  return (
    <div className='card text-center'>
      <img
        className='round-img'
        style={{ width: '60px' }}
        src={avatar_url}
        alt={login}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className='btn btn-dark btn-sm my-1'
          href={html_url}
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
