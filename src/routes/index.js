import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <HomeScreen />
        </Route>
        <Route exact path={'/:userName'}>
          <ProfileScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
