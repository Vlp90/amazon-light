import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {



  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

<div className="home__row">
          <Product
            id="78945611"
            title="39 MMA Boxing Heavy Punching Training Bag with Chains +Handbag Hook+Boxing Gloves+Hands Bandages Kickboxing Muay Thai Training Fitness Workout Set"
            price={33.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/61Jxaih42SL._AC_SL1000_.jpg"
          />
          <Product
            id="45871947"
            title="AORUS 15G (XB) Performance Gaming Laptop, 15.6-inch FHD 240Hz IPS, GeForce RTX 2070 Super Max-Q, 10th Gen Intel i7-10875H, 16GB DDR4, 512GB NVMe SSD"
            price={2299}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZlxvmpbRL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="36481254"
            title="Teamgee H5 37 Electric Skateboard, 22 MPH Top Speed, 760W Dual Motor, 11 Miles Range, 14.5 Lbs, 10 Layers Maple Longboard with Wireless Remote Control"
            price={499.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61J57JHKMJL._AC_SL1000_.jpg"
          />
          <Product
            id="44812589"
            title="Nissin Top Ramen, Soy Sauce Flavor, The Original Instant Ramen, 3oz. (24-Pack)"
            price={29.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81tMKUKi6TL._SL1500_.jpg"
          />
          <Product
            id="49781223"
            title="Lean UX: Designing Great Products with Agile Teams Hardcover – October 25, 2016 "
            price={31.48}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71xdd+P4SML.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="45611289"
            title="SONY PlayStation 4 Slim 1TB Console, Light & Slim PS4 System, 1TB Hard Drive, All the Greatest Games, TV, Music & More"
            price={399}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61OL2zIliML._SL1500_.jpg"
          />
        </div>

<div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

    </div>
    
      </div>
  );
}

export default Home;
