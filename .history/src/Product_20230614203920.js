import React from "react";
import "./Product.css";

function Product() {
    return <div className="product">
        <div className="product__info">
            <p>Macbook Pro 2018</p>
            <p className='product__price'>
                <small>$</small>
                <strong>500.55</strong>
            </p>
            <div className="product__rating">
                <p>🌟</p>
                <p>🌟</p>
                <p>🌟</p>
            </div>

        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07Je7KvrZTCc6HbVdl-xG7u5JQV3Mlxkr-w&usqp=CAU" alt=""/>
    </div>;
}

export default Product;