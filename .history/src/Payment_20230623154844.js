import React from 'react'

function Payment() {
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout: <Link to="/checkout">{basket?.length} item(s)</Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>45 rue Esculape, Rés Le Cervantès</p>
            <p>34090, Montpellier</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">

          </div>
          </div>
          </div>
          </div>
  );
}

export default Payment