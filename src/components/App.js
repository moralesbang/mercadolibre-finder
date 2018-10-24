import React from 'react'
import ProductContainer from '../containers/Product'
import Search from '../containers/Search'

const App = () => {
  return(
    <div className="app">
      <div className="container">
        <Search />
        <ProductContainer />
      </div>
    </div>
  )
}

export default App