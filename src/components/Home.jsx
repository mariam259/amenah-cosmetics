import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Categories from "./Categories";
import About from "./About";
import Product from "./Product";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <About />
      <Categories />
      {/* <Product /> */}
      {/* <FAQ /> */}
      <Testimonial />
      <Footer />
    </>
  );
}
