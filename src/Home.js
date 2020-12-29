import React from "react";
import "./Home.css";

import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt="banner"
        />
      </div>
      <div className="home__row">
        <Product
          title="Elastic Hairband"
          price={9.99}
          image="https://media1.s-nbcnews.com/j/newscms/2020_03/1528800/screen_shot_2020-01-15_at_10-19-03_am_06609b434fd1235e261ce2431ddcddb4.fit-720w.png"
          rating={3}
        />
        <Product
          title="Office essentials"
          price={19.99}
          image="https://c1.wallpaperflare.com/preview/852/81/85/handbag-purse-fashion-bag.jpg"
          rating={1}
        />
      </div>
      <div className="home__row">
        <Product
          title="Boat Rockerz"
          price={59.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61WjZrbnqML._SY355_.jpg"
          rating={5}
        />
        <Product
          title="Laundry Bag"
          price={59.99}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5871875/2018/5/15/57958e6f-249e-47bb-bfaf-136775b1c41b1526362441656-NA-6061526362441507-1.jpg"
          rating={5}
        />
        <Product
          title="Embroidered Kurta"
          price={59.99}
          image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/11/19/638a2975-390e-45e4-926f-d2accc1ed0441574111698277-2.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          title="Smart TV 2020"
          price={299.99}
          image="https://images.samsung.com/is/image/samsung/levant-uhd-tu8500-ua55tu8500uxtw-frontblack-229855928?$720_576_PNG$"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
