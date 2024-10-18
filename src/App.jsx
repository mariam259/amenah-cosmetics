// import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";
import Categories from "./components/Categories";
// import Hero from "./components/Hero";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/faq", element: <FAQ /> },
  { path: "/products", element: <Product /> },
  { path: "/testimonials", element: <Testimonial /> },
  { path: "/categories", element: <Categories /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter} />
      {/* <Nav /> */}
      {/* <Hero /> */}
      {/* <h1 className="text-3xl font-bold underline font-aref">أمنة!</h1>
      <h1 className="text-3xl font-bold underline font-aref bg-amenah_pink">
        أمنة!
      </h1>
      <h1 className="text-3xl font-bold underline font-aref bg-amenah_mint">
        أمنة!
      </h1>
      <h1 className="text-3xl font-bold underline font-aref bg-amenah_blue">
        أمنة!
      </h1> */}
    </>
  );
}

export default App;
