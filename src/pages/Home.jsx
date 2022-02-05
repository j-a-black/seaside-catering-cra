import React from "react";
import CardList from "../components/card-primary/CardList";

import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section>
        <CardList />
      </section>
    </>
  );
};

export default Home;
