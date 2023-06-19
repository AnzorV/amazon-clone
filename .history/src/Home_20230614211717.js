import React from "react"
import "./Home.css"
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="" />

        <div className="home__row">
          <Product 
            title="Macbook Pro 2018"
            price={500.55}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07Je7KvrZTCc6HbVdl-xG7u5JQV3Mlxkr-w&usqp=CAU"
            rating={5}
          />
          <Product
          id="49538094"
          title="" />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
        </div>

      </div>
    </div>
  );
}

export default Home;