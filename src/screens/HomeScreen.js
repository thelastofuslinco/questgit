import NavBar from '../components/NavBar';
import React, { useState } from 'react';
import { useGlobalContext } from '../global/GlobalContextData';
import { useHistory, useParams } from 'react-router-dom';

export default function HomeScreen() {
  const { getUserData } = useGlobalContext();
  const [searchInput, setSearchInput] = useState('');
  const { user } = useParams();

  const history = useHistory();

  return (
    <div className="">
      <NavBar
        inputValue={searchInput}
        setInput={setSearchInput}
        getUserData={() => {
          getUserData(`${searchInput.length ? searchInput : user}`);
          history.push(`/${searchInput}`);
        }}
      />
    </div>
  );
}
