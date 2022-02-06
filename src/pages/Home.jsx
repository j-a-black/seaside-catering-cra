import React from "react";
import CardItems from "../components/card-items/CardItems";
import CardList from "../components/card-primary/CardList";
import Footer from "../components/footer/Footer";

import Hero from "../components/hero/Hero";

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
      <Footer />
    </>
  );
};

export default Home;
