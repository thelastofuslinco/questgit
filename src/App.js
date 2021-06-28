import './scss/app.scss';
import Home from './screens/HomeScreen';
import React from 'react';
import { GlobalState } from './global/GlobalContextData';

function App() {
  return (
    <div className="vh-100">
      <GlobalState>
        <Home />
      </GlobalState>
    </div>
  );
}

export default App;
