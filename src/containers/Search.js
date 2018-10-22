import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions'

const Search = ({ dispatch }) => {

  let input

  return(
    <form 
      id="searchbox" 
      onSubmit={
        event => {
          event.preventDefault()
          if (input.value.trim()) {
            dispatch(fetchProducts(input.value))
            input.value = ''
          }
        }
      }
    >
      <input 
        type="text" 
        placeholder="What is you looking for?" 
        className="" 
        ref={node => input = node}
      />
    </form>
  )
}

export default connect()(Search)