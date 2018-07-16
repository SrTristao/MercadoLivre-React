import initialState from '../initialState'
import {
  ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE
} from '../actionTypes';

export function items(state = initialState.items, action) {
  switch (action.type) {
    case ITEMS_REQUEST:
      return Object.assign({}, state, {
        isFetchingItems: true
      })
    case ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingItems: false,
        errorMessage: null,
        items: action.items
      })
    case ITEMS_FAILURE:
      return Object.assign({}, state, {
        isFetchingItems: false,
        errorMessage: action.message
      })

    default:
      return state
  }
}
