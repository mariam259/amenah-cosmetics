import React from "react";
import img from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
// import { Button, Card } from "flowbite-react";
export default function Hero() {
  const navigate = useNavigate();
  return (
    // <div className="">
    <div className="container">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" h-1/3"></div>
        <div className="flex flex-col justify-end lg:items-end px-11 items-center ">
          <p className="text-amenah_pink font-bold pb-3 text-3xl  md:text-5xl lg:px-5 lg:font-medium text-center ">
            {/* عالم آمن للأنثى */}
            اختاري العناية المصممة خصيصًا لكِ
          </p>
          <p className="text-amenah_pink text-2xl font-semibold lg:px-5 py-4 pb-5 text-center">
            منتجات صيدلانية صنعت بكل حب وأمان
          </p>
          <p className="text-amenah_blue text-2xl font-semibold lg:px-5  pb-5 text-center">
            جودة محلية بلمسة عربية
          </p>
          <button
            className="bg-amenah_mint text-amenah_blue rounded-2xl py-3 px-8 font-bold lg:mx-5 hover:text-amenah_pink"
            onClick={() => navigate("/about")}
          >
            تعرفي علينا
          </button>
        </div>
      </div>
    </div>
  );
}
