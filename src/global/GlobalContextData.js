import React, { useState, createContext } from 'react';
import { requestData } from 'utils/Requests';

const GlobalStateContext = createContext();

export function GlobalState({ children }) {
  //dados do aplicativo
  const [searchInput, setSearchInput] = useState('');
  const [user, setUser] = useState('');
  const [starreds, setStarreds] = useState([]);
  const [repositories, setRepositories] = useState([]);

  //Puxa os dados do usuario
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
    <GlobalStateContext.Provider
      value={{ searchInput, setSearchInput, user, starreds, repositories }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export const useGlobalContext = () => {
  return;
};
