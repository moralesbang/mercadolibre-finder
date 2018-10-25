import { combineReducers } from "redux";
import {
  SEARCH_PRODUCTS,
  RECEIVE_PRODUCTS,
  SELECT_CATEGORY,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
} from './actions'

// Products

let initialProductsState = {
  isFetching: false,
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

function query(state = '', action) {
  switch(action.type) {
    case SEARCH_PRODUCTS:
      return action.query
    default:
      return state
  }
}

// Categories

let initialCategoriesState = {
  isFetching: false,
  items: []
}

function selectedCategory(state = '', action) {
  switch(action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

function categories(state = initialCategoriesState, action) {
  switch(action.type) {
    case REQUEST_CATEGORIES:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_CATEGORIES:
     return Object.assign({}, state, {
       isFetching: false,
       items: action.categories,
       lastUpdated: action.receivedAt
     })
    default:
     return state
  }
}

const rootReducer = combineReducers({
  query,
  products,
  selectedCategory,
  categories
})

 export default rootReducer