import './scss/app.scss';
import React from 'react';
import { GlobalState } from './global/GlobalContextData';
import { Routes } from './routes';

function App() {
  return (
    <div className="vh-100">
      <GlobalState>
        <Routes />
      </GlobalState>
    </div>
  );
}

export default App;
