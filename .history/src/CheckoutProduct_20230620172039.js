import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />

        <div className='checkoutProduct__info'>

        </div>
    </div>
  )
}

export default CheckoutProduct;