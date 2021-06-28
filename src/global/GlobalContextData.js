import React, { useState, createContext, useContext } from 'react';
import { requestData } from '../utils/Requests';

const GlobalStateContext = createContext();

export function GlobalState({ children }) {
  //Dados do aplicativo
  const [user, setUser] = useState('');
  const [starreds, setStarreds] = useState([]);
  const [repositories, setRepositories] = useState([]);

  //Puxa os dados do usuario
  const getUserData = (searchInput) => {
    console.log(searchInput);
    const future = requestData(searchInput);
    future.then((response) => setUser(response));
    getRepoData(searchInput);
    getStarredData(searchInput);
  };

  const getRepoData = (searchInput) => {
    const future = requestData(searchInput + '/repos');
    future.then((response) => setRepositories(response));
  };

  const getStarredData = (searchInput) => {
    const future = requestData(searchInput + '/starred');
    future.then((response) => setStarreds(response));
  };

  return (
    <GlobalStateContext.Provider
      value={{
        user,
        starreds,
        repositories,
        getUserData,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalStateContext);

  const { user, starreds, repositories, getUserData } = context;

  return {
    user,
    starreds,
    repositories,
    getUserData,
  };
};
