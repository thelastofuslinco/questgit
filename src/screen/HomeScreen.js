import React, { useEffect, useState } from 'react';
import { requestData } from '../utils/Requests';

export default function HomeScreen() {
  // user data
  const [user, setUser] = useState({});
  const [starred, setStarred] = useState({});
  const [repositories, setRepositories] = useState({});

  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(user);
    console.log(repositories);
    console.log(starred);
  }, [starred]);

  const getUserData = () => {
    const future = requestData(input);
    future.then((response) => setUser(response));
    getRepoData();
    getStarredData();
  };

  const getRepoData = () => {
    const future = requestData(input + '/repos');
    future.then((response) => setRepositories(response));
  };

  const getStarredData = () => {
    const future = requestData(input + '/starred');
    future.then((response) => setStarred(response));
  };

  return (
    <div className="vh-100 bg-dark">
      <nav className="w-100 row py-3">
        <p className="d-flex justify-content-center col-12">QuestGit</p>

        <div className="d-flex justify-content-center col-12">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <button onClick={getUserData}>search</button>
        </div>
      </nav>

      <main className="">
        <button onClick={getStarredData}>starred</button>
        <button onClick={getRepoData}>repos</button>

        <div>
          <img src={user.avatar_url} height="200px" />
          <p>tagname: {user.login}</p>
          <p>name: {user.name}</p>
          <p>followers: {user.followers}</p>
          <p>following: {user.following}</p>
          <p>public_repos: {user.public_repos}</p>
          <p>location: {user.location}</p>
          <p>bio: {user.bio}</p>
        </div>
      </main>
    </div>
  );
}
