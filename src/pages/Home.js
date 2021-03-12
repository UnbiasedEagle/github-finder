import React, { Fragment } from 'react';
import Alert from '../components/Alert';
import Search from '../components/Search';
import Users from '../components/Users';

const Home = () => {
  return (
    <Fragment>
      <Alert></Alert>
      <Search></Search>
      <Users></Users>
    </Fragment>
  );
};

export default Home;
