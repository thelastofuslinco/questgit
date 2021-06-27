import Button from 'components/Button';
import Input from 'components/Input';
import Profile from 'components/Profile';
import Repository from 'components/Repository';
import Starred from 'components/Starred';
import React, { useState } from 'react';
import { requestData } from '../utils/Requests';

export default function HomeScreen() {
  // user data
  const [user, setUser] = useState('');
  const [starreds, setStarreds] = useState([]);
  const [repositories, setRepositories] = useState([]);

  const [isRepositories, setIsRepositories] = useState(false);
  const [isStarreds, setIsStarreds] = useState(false);

  const [input, setInput] = useState('');

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
    future.then((response) => setStarreds(response));
  };

  return (
    <div className="">
      <nav className="w-100 row py-3">
        <p className="d-flex justify-content-center col-12">QuestGit</p>

        <div className="d-flex justify-content-center col-12">
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && getUserData()}
          />

          <Button onClick={getUserData} text="search" />
        </div>
      </nav>

      <main className="">
        {user && <Profile user={user} starreds={starreds} />}

        <div className="d-flex justify-content-center">
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
