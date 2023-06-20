/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />

        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
          </p>
        </div>
    </div>
  )
}

export default CheckoutProduct;