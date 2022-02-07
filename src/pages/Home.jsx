import React from "react";
import BannerImg from "../components/banner-img/BannerImg";
import CardItems from "../components/card-items/CardItems";
import CardList from "../components/card-primary/CardList";
import Footer from "../components/footer/Footer";

import Hero from "../components/hero/Hero";
import BannerImage from "../images/table.png";

const Home = () => {
  return (
    <>
      <Hero />
      <section>
        <CardList />
      </section>
      <section>
        <CardItems />
      </section>
      <section>
        <BannerImg
          bannerImage={BannerImage}
          imageOveraly={`linear-gradient(rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.50))`}
          bannerTitle={"Subscribe To Our Newsletter"}
        />
      </section>
      <Footer />
    </>
  );
};

export default Home;
