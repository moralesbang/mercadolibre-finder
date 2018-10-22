import React from 'react'
import ProductContainer from '../containers/Product'
import Search from '../containers/Search'

const App = () => {
  return(
    <div className="app">
      <Search />
      <ProductContainer />
    </div>
  )
}

export default App