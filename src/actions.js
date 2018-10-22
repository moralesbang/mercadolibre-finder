import axios from 'axios'

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

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
