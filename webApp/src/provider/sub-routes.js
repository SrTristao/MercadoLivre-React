import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import ItemDetails from '../pages/item-details/item-details';
import Items from '../pages/items/items';
import PageError from '../pages/page-error/page-error';

export default (
  <Switch>    
    <Route path='/items/:id' component={ItemDetails}/>
    <Route path='/items' component={Items}/>    
    <Route path='/pageError' component={PageError}/>    
  </Switch>
);