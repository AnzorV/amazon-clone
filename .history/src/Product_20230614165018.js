import React from 'react'
import "./Product.css"

function Product() {
  return<div className="product">
    <div className="product__info">
        <p>Macbook Pro 2018</p>
            <p className='product__price'>
                <small>$</small>
                <strong></strong>
            </p>
        </div>
    </div>;
}

export default Product