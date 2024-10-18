import React from "react";
import product from "../assets/product.png";
import ImageCard from "./ImageCard";
import body from "../assets/body.png";
export default function Product() {
  const products = [
    {
      img: product,
      productName: "Body Wash",
      description: "this is detail about the product",
    },
    {
      img: product,
      productName: "Body Lotion",
      description: "this is detail about the product",
    },
    {
      img: product,
      productName: "Body Wash",
      description: "this is detail about the product",
    },
    {
      img: product,
      productName: "Body Lotion",
      description: "this is detail about the product",
    },
    {
      img: product,
      productName: "Body Wash",
      description: "this is detail about the product",
    },
    {
      img: product,
      productName: "Body Lotion",
      description: "this is detail about the product",
    },
  ];
  return (
    <main className="p-5">
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-5 mr-4 justify-evenly"
        dir="rtl"
      >
        {products.map(({ img, productName, description }) => (
          <div className="pt-5">
            <ImageCard imgSrc={img}>
              <h3 className="text-xl font-bold mb-2">{productName}</h3>
              <p className="">{description} </p>
            </ImageCard>
          </div>
        ))}
      </div>
    </main>
  );
}
