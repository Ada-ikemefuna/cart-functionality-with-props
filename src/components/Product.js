import React from 'react'

const Product = ({product, onAdd}) => {
  return (
    <div>
        <img src={product.image} alt="item" className="small"/>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
            <button onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Product;