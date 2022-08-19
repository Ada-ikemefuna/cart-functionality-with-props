import React from 'react'

const Product = ({ product, onAdd }) => {
  return (
    <div>
      <div>
        <img src={product.image} alt="item" width={"300px"} height={"300px"} />
      </div>

      <h2>{product.name}</h2>
      <h3>₦{product.price}</h3>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Product;