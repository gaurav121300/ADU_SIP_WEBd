import React from 'react'

const ProductCard = ({title,price}) => {
  return (
    <div>
        <h2>{title}</h2>
        <h3>{price}</h3>
    </div>
  )
}

export default ProductCard