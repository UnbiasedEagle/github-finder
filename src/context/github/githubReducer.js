import GithubActionTypes from './types';

const githubReducer = (state, action) => {
  switch (action.type) {
    case GithubActionTypes.SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GithubActionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GithubActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GithubActionTypes.GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GithubActionTypes.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
