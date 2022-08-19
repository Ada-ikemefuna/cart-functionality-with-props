import React from 'react';
import Product from './Product';


const Main = ({ products, onAdd }) => {
  return (
    <main className='block col_2'>
      <h2>Products</h2>
      <div className="flex_page">
        {products.map(product => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  )
}

export default Main