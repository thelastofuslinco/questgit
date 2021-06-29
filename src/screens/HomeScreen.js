import NavBar from '../components/NavBar';
import React, { useState } from 'react';
import { useGlobalContext } from '../global/GlobalContextData';
import { useHistory, useParams } from 'react-router-dom';

export default function HomeScreen() {
  const { getUserData, user } = useGlobalContext();
  const [searchInput, setSearchInput] = useState('');
  const { userName } = useParams();

  const history = useHistory();

  return (
    <div className="container">
      <NavBar
        value={searchInput}
        setValue={setSearchInput}
        getData={() => {
          getUserData(`${searchInput.length ? searchInput : userName}`);

          history.push(`/${searchInput}`);
        }}
      />

      {user ? null : (
        <p className="text-center">Digite a tag de usuário valido!</p>
      )}
    </div>
  );
}
