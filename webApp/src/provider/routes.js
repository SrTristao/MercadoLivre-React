import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Home from '../pages/home/home';
import ItemDetails from '../pages/item-details/item-details';
import Items from '../pages/items/items';

export default (
  <Switch>
    <Route path='/' component={Home}/>
    <Route path='/items' component={Items}/>
    <Route path='/items/:id' component={ItemDetails}/>
  </Switch>
);
