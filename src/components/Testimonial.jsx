import React from "react";
import Slider from "react-slick";
import { TestimonialData } from "../constant/testimonial";
export default function Testimonial() {
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-8">
          <h1 className="uppercase font-semibold text-amenah_blue">
            آراء العملاء
          </h1>
          <p className="font-semibold text-3xl">ماذا قالوا عنا</p>
        </div>
        {/* Testimonial cards */}
        <div>
          <Slider {...setting}>
            {TestimonialData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-gray-100">
                    <div className="flex justify-end items-center gap-5">
                      {/* img of testimonial */}
                      <img
                        src={item.img}
                        alt="testimonial"
                        className="w-16 h-16 rounded-full "
                      />
                      <div className="text-right">
                        {/* <p className="text-xl font-bold text-amenah_blue">
                          {item.name}
                        </p> */}
                        <p className="text-sm text-gray-500">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
