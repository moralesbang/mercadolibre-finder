import { combineReducers } from "redux";
import {
  SEARCH_PRODUCTS,
  RECEIVE_PRODUCTS
} from './actions'

let initialProductsState = {
  isFetching: true,
  items: []
}

function products(state = initialProductsState, action) {
  switch(action.type) {
    case SEARCH_PRODUCTS:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.products,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ products })

 export default rootReducer