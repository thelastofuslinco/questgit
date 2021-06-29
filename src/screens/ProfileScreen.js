import Button from '../components/Button';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import HasRepository from '../components/HasRepository';
import Repository from '../components/Repository';
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
    <div className="mb-4">
      <NavBar
        value={searchInput}
        setValue={setSearchInput}
        getData={() => {
          getUserData(`${searchInput.length ? searchInput : userName}`);
          history.push(`/${searchInput}`);
        }}
      />

      <main className="container d-flex flex-md-row flex-column">
        <div className="">
          {user && <Profile user={user} starreds={starreds} />}
        </div>

        <div className=" my-2">
          <div className="row justify-content-around">
            <Button
              className="btn btn-primary col-5"
              onClick={() => {
                setIsStarreds(true);
                setIsRepositories(false);
              }}
              text="Estrelado"
            />
            <Button
              className="btn btn-primary col-5"
              onClick={() => {
                setIsStarreds(false);
                setIsRepositories(true);
              }}
              text="Repositorios"
            />
          </div>

          {isRepositories && <p>Repositorios</p>}
          {isStarreds && <p>Estrelado</p>}
          {(isRepositories && <hr className="bg-white" />) ||
            (isStarreds && <hr className="bg-white" />)}

          {isRepositories &&
            repositories.map((repository, index) => (
              <Repository repository={repository} key={index} />
            ))}
          {isStarreds &&
            starreds.map((starred, index) => (
              <Repository repository={starred} key={index} />
            ))}
          <HasRepository repository={starreds} isRepository={isStarreds} />

          <HasRepository
            repository={repositories}
            isRepository={isRepositories}
          />
        </div>
      </main>
    </div>
  );
}
