import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = 

  return (
    <div className='payment'>
        <div className='payment__container'>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                <div className='payment__address'>
                    <p></p>
                </div>
                </div>
            </div>

            <div className='payment__section'></div>

            <div className='payment__section'></div>
        </div>
    </div>
  )
}

export default Payment