import React, { useContext } from 'react';
import Spinner from './Spinner';
import UserItem from './UserItem';
import GithubContext from '../context/github/githubContext';

const Users = () => {
  const { loading, users } = useContext(GithubContext);
  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className='grid-3'>
        {users.map((user) => {
          return <UserItem key={user.id} {...user}></UserItem>;
        })}
      </div>
    );
  }
};

export default Users;
