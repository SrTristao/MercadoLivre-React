import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as storageMergeReducer } from 'redux-storage'
import { items } from './reducers/items';

const mercadoLivreApp = combineReducers({
  items,
  router: routerReducer
});

export default storageMergeReducer(mercadoLivreApp);
