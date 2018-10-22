import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
  return(
    <ul className="product-list">
      {products.map(product => 
        <Product
          key={product.id}
          {...product}
        />
      )}
    </ul>
  )
}

export default ProductList