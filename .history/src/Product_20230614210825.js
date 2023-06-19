import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>500.55</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>

            </div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07Je7KvrZTCc6HbVdl-xG7u5JQV3Mlxkr-w&usqp=CAU"
                alt=""
            />

            <button>Add to Basket</button>
        </div>
    );
}

export default Product;