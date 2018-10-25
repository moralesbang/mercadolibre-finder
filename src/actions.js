import axios from 'axios'

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

// Products

function searchProducts(query) {
  return {
    type: SEARCH_PRODUCTS,
    query
  }
}

function receiveProducts(data) {
  return {
    type: RECEIVE_PRODUCTS,
    products: data,
    receivedAt: Date.now()
  }
}


export function fetchProducts(query) {
  return dispatch => {
    dispatch(searchProducts(query))

    return axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${query}`)
      .then(
        res => dispatch(receiveProducts(res.data.results)),
        error => console.log('An error ocurred.', error)
      )
  }
}

// Categories

function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category
  }
}

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(data) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: data,
    receivedAt: Date.now()
  }
}

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())

    return axios.get('https://api.mercadolibre.com/sites/MCO/categories')
      .then(
        res => dispatch(receiveCategories(res.data)),
        error => console.log('An error ocurred.', error)
      )
  }
}
