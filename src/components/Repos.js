import React from 'react';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
  return (
    <React.Fragment>
      {repos.map((repo) => {
        return <RepoItem repo={repo} key={repo.id}></RepoItem>;
      })}
    </React.Fragment>
  );
};

export default Repos;
