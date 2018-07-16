import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Home from '../pages/home/home';

export default (
  <Switch>
    <Route path='/' component={Home}/>    
  </Switch>
);
