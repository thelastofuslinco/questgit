import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Repository from '../components/Repository';
import Starred from '../components/Starred';
import React, { useState } from 'react';
import { useGlobalContext } from '../global/GlobalContextData';

export default function HomeScreen() {
  const { user, starreds, repositories, getUserData } = useGlobalContext();
  const [searchInput, setSearchInput] = useState('');

  const [isRepositories, setIsRepositories] = useState(false);
  const [isStarreds, setIsStarreds] = useState(false);

  return (
    <div className="">
      <NavBar
        inputValue={searchInput}
        setInput={setSearchInput}
        getUserData={() => {
          getUserData(searchInput);
        }}
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
