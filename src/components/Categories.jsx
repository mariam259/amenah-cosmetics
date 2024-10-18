import React from "react";
import body from "../assets/body.png";
import serum from "../assets/serum.png";
import hair from "../assets/hair.png";
import soap from "../assets/soap.png";
import perfume from "../assets/perfume.png";
import face from "../assets/face.png";
import makeup from "../assets/makeup.png";
import Slider from "react-slick";

export default function Categories() {
  const categories = [
    {
      title: "العناية بالبشرة",
      img: face,
      id: 1,
    },
    {
      title: "العناية بالشعر",
      img: hair,
      id: 2,
    },
    {
      title: "العناية بالجسم",
      img: body,
      id: 3,
    },
    {
      title: "سيرم",
      img: serum,
      id: 4,
    },
    {
      title: "منتجات تجميلية",
      img: makeup,
      id: 5,
    },
    {
      title: "عطور",
      img: perfume,
      id: 6,
    },
    {
      title: "صابون",
      img: soap,
      id: 7,
    },
    {
      title: "عناية بالأظافر",
      img: face,
      id: 8,
    },
  ];
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-8">
          <h1 className="uppercase font-semibold text-amenah_mint">الفئات</h1>
          <p className="font-semibold text-3xl text-amenah_blue ">
            ما تقدمه آمنة
          </p>
        </div>
        <Slider {...setting}>
          {categories.map((item) => {
            return (
              <div key={item.id}>
                {/* <div className="flex gap-4 p-8 shadow-lg mx-4 rounded-full bg-slate-200/20 "> */}
                <div className="flex flex-col justify-end items-center gap-3 mb-7 bg-amenah_mint p-3">
                  {/* img of testimonial */}
                  <img
                    src={item.img}
                    alt="testimonial"
                    className="w-24 h-24 rounded-full "
                  />
                  <div className="text-right">
                    <p className="text-xl font-bold text-amenah_blue">
                      {item.title}
                    </p>
                    {/* <p className="text-sm text-gray-500">{item.text}</p> */}
                  </div>
                </div>
              </div>
              // </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
