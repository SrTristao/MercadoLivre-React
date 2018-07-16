import initialState from '../initialState'
import {
  ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE, ITEMS_CLEAN, ITEM_SELECTED
} from '../actionTypes';

export function items(state = initialState.items, action) {
  switch (action.type) {
    case ITEMS_REQUEST:
      return Object.assign({}, state, {
        isFetchingItems: true,
        item_selected: {},
        itemsArr: []
      })
    case ITEMS_SUCCESS:
      return Object.assign({}, state, {
        isFetchingItems: false,
        errorMessage: null,
        itemsArr: action.itemsArr
      })
    case ITEMS_FAILURE:
      return Object.assign({}, state, {
        isFetchingItems: false,
        errorMessage: action.message
      })
    case ITEMS_CLEAN:
      return Object.assign({}, state, {
        itemsArr: action.itemsArr,
        item_selected: action.item_selected
      })
    case ITEM_SELECTED:
      return Object.assign({}, state, {
        item_selected: action.item_selected,
        isFetchingItems: action.isFetchingItems
      })

    default:
      return state
  }
}
