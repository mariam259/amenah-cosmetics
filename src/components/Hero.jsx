import React from "react";
import img from "../assets/hero.png";
import { Button, Card } from "flowbite-react";
export default function Hero() {
  return (
    // <div className="">
    <section>
      <div
        className="bg-cover bg-center h-screen w-full  "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" h-1/3"></div>
        <div className="flex flex-col justify-end lg:items-end px-11 items-center ">
          <p className="text-amenah_pink font-bold pb-3 text-3xl  md:text-5xl lg:px-5 lg:font-medium ">
            عالم آمن للأنثى
          </p>
          <p className="text-amenah_pink text-2xl font-semibold lg:px-5 py-4 pb-5 text-center">
            منتجات صيدلانية صنعت بكل حب وأمان
          </p>
          <button className="bg-amenah_mint text-amenah_blue rounded-2xl py-3 px-8 font-bold lg:mx-5 hover:text-amenah_pink">
            تعرفي علينا
          </button>
        </div>
      </div>
    </section>
  );
}
