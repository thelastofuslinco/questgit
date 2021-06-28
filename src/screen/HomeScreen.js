import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Repository from '../components/Repository';
import Starred from '../components/Starred';
import React, { useState } from 'react';
import { requestData } from '../utils/Requests';

export default function HomeScreen() {
  // user data
  const [user, setUser] = useState('');
  const [starreds, setStarreds] = useState([]);
  const [repositories, setRepositories] = useState([]);

  const [isRepositories, setIsRepositories] = useState(false);
  const [isStarreds, setIsStarreds] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  const getUserData = () => {
    const future = requestData(searchInput);
    future.then((response) => setUser(response));
    getRepoData();
    getStarredData();
  };

  const getRepoData = () => {
    const future = requestData(searchInput + '/repos');
    future.then((response) => setRepositories(response));
  };

  const getStarredData = () => {
    const future = requestData(searchInput + '/starred');
    future.then((response) => setStarreds(response));
  };

  return (
    <div className="">
      <NavBar
        inputValue={searchInput}
        setInput={setSearchInput}
        getUserData={getUserData}
      />

      <main className="container">
        {user && <Profile user={user} starreds={starreds} />}

        <div className="row justify-content-around">
          <Button
            onClick={() => {
              setIsStarreds(true);
              setIsRepositories(false);
            }}
            text="starred"
          />
          <Button
            onClick={() => {
              setIsStarreds(false);
              setIsRepositories(true);
            }}
            text="repos"
          />
        </div>

        {isRepositories &&
          repositories.map((repository, index) => (
            <Repository repository={repository} key={index} />
          ))}
        {isStarreds &&
          starreds.map((starred, index) => (
            <Starred starred={starred} key={index} />
          ))}
      </main>
    </div>
  );
}
