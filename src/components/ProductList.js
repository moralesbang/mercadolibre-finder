import React from 'react'
import Product from './Product'
import Spinner from './spinner/Spinner';

const ProductList = ({ products, isFetching }) => {
  if (isFetching) {
    return <Spinner />
  } else if (products.length === 0) {
    return(
      <p>
        Nothing to show!
        <br/>
        Try With another word c:
      </p>
      
    )
  } else {
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
}

export default ProductList