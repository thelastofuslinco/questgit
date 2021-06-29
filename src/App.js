import './scss/app.scss';
import React from 'react';
import { GlobalState } from './global/GlobalContextData';
import { Routes } from './routes';

function App() {
  return (
    <div className="">
      <GlobalState>
        <Routes />
      </GlobalState>
    </div>
  );
}

export default App;
