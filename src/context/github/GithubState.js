import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import GithubActionTypes from './types';

const GithubState = (props) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    dispatch({
      type: GithubActionTypes.SET_LOADING,
    });

    const { data } = await axios.get(
      `https://api.github.com/search/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&q=${text}`
    );

    dispatch({
      type: GithubActionTypes.SEARCH_USERS,
      payload: data.items,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: GithubActionTypes.CLEAR_USERS,
    });
  };

  const getUser = async (userName) => {
    dispatch({
      type: GithubActionTypes.SET_LOADING,
    });

    const { data } = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GithubActionTypes.GET_USER,
      payload: data,
    });
  };

  const getRepos = async (userName) => {
    dispatch({
      type: GithubActionTypes.SET_LOADING,
    });

    const { data } = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GithubActionTypes.GET_REPOS,
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        getRepos,
        getUser,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
