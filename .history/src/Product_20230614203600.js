import React from "react";
import "./Product.css";

function Product() {
  return<div className="product">
    <div className="product__info">
        <p>Macbook Pro 2018</p>
            <p className='product__price'>
                <small>$</small>
                <strong>500.55</strong>
            </p>
            <div className="product__rating">
            🌟
            </div>
        </div>
    </div>;
}

export default Product;