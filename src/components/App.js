import React from 'react'
import ProductContainer from '../containers/Product'
import Search from '../containers/Search'
import Sidebar from '../containers/Sidebar'

const App = () => {
  return(
    <div id="app">
      <Sidebar/>

      <div className="container" id="page-wrap">
        <Search />
        <ProductContainer />
      </div>
    </div>
  )
}

export default App