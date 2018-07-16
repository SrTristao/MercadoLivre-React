import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import initialState from './initialState'

const persistedState = loadState(initialState) 

let store = null

store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => saveState(store.getState()))

function loadState(initialState) {
  try {
    let serializedState = sessionStorage.getItem('vlstate')
    if (serializedState === null) {
      return initialState
    }
    
    serializedState = JSON.parse(serializedState)    
    return serializedState
  } catch (err) {
    return undefined
  }
}

function saveState(state) {
  const serializedState = JSON.stringify(state)
  sessionStorage.setItem('vlstate', serializedState)
}

export default store