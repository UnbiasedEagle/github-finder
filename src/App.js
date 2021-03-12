import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import User from './pages/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar></Navbar>
          <main className='container'>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/user/:login' component={User}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </main>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
