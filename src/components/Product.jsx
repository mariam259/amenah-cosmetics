import React from "react";
// import product from "../assets/product.png";
import ImageCard from "./ImageCard";
// import body from "../assets/body.png";
import { soaps } from "../constant/soap";
import { hairProducts } from "../constant/hair";
import { useLocation } from "react-router-dom";
import { faceProducts } from "../constant/face";
import { bodyProducts } from "../constant/body";
import { serumProducts } from "../constant/serum";
import { perfumeProducts } from "../constant/perfume";
export default function Product() {
  const location = useLocation();
  const categroyId = location.state.id;
  // const products = [
  //   {
  //     img: product,
  //     productName: "Body Wash",
  //     description: "this is detail about the product",
  //   },
  //   {
  //     img: product,
  //     productName: "Body Lotion",
  //     description: "this is detail about the product",
  //   },
  //   {
  //     img: product,
  //     productName: "Body Wash",
  //     description: "this is detail about the product",
  //   },
  //   {
  //     img: product,
  //     productName: "Body Lotion",
  //     description: "this is detail about the product",
  //   },
  //   {
  //     img: product,
  //     productName: "Body Wash",
  //     description: "this is detail about the product",
  //   },
  //   {
  //     img: product,
  //     productName: "Body Lotion",
  //     description: "this is detail about the product",
  //   },
  // ];
  const productItems = [
    {
      id: 1,
      product: faceProducts,
    },
    {
      id: 2,
      product: hairProducts,
    },
    {
      id: 3,
      product: bodyProducts,
    },
    {
      id: 4,
      product: serumProducts,
    },
    {
      id: 5,
      product: perfumeProducts,
    },
    {
      id: 6,
      product: soaps,
    },
  ];

  const selectedCategory = productItems.find((item) => item.id === categroyId);
  console.log(selectedCategory);
  return (
    <main className="p-5">
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-5 mr-4 justify-evenly"
        dir="rtl"
      >
        {/* console.log(selectedCategory); */}
        {selectedCategory.product.map(({ img, productName, description }) => (
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
