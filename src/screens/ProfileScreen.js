import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import Repository from '../components/Repository';
import Starred from '../components/Starred';
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../global/GlobalContextData';
import { useHistory, useParams } from 'react-router-dom';

export default function ProfileScreen() {
  const { user, starreds, repositories, getUserData } = useGlobalContext();
  const [searchInput, setSearchInput] = useState('');

  const [isRepositories, setIsRepositories] = useState(false);
  const [isStarreds, setIsStarreds] = useState(false);
  const { userName } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (userName !== undefined) {
      getUserData(userName);
    }
  }, [userName]);

  return (
    <div className="">
      <NavBar
        inputValue={searchInput}
        setInput={setSearchInput}
        getUserData={() => {
          getUserData(`${searchInput.length ? searchInput : userName}`);
          history.push(`/${searchInput}`);
        }}
      />

      <main className="container">
        {user && <Profile user={user} starreds={starreds} />}

        <div className="row justify-content-around my-2">
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
