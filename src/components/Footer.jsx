import React from "react";
import footer from "../assets/5.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import logo from "../assets/icon.jpg";
import { Link } from "react-router-dom";
const footerBg = {
  backgroundImage: `url(${footer})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom center",
};
export default function Footer() {
  return (
    <div style={footerBg} className="rounded-t-3xl">
      <div className="bg-black/5">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-3 border-t-2 border-gray-300/10 text-amenah_blue text-right">
            {/* footer links */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold  text-right mb-5 ">
                  الروابط
                </h1>
                {/* </div> */}
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link to="/">
                      <a
                        href=""
                        className="hover:text-amenah_pink duration-200"
                      >
                        {" "}
                        الرئيسية
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <a
                        href=""
                        className="hover:text-amenah_pink duration-200"
                      >
                        من نحن
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories">
                      <a
                        href=""
                        className="hover:text-amenah_pink duration-200"
                      >
                        الفئات
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <a
                        href=""
                        className="hover:text-amenah_pink duration-200"
                      >
                        {" "}
                        الأسئلة الشائعة
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold  text-right mb-5 ">
                  الروابط
                </h1>
                {/* </div> */}
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link to="/products">
                      <a
                        href=""
                        className="hover:text-amenah_pink duration-200"
                      >
                        {" "}
                        المنتجات
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="" className="hover:text-amenah_pink duration-200">
                      من نحن
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-amenah_pink duration-200">
                      الفئات
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:text-amenah_pink duration-200">
                      {" "}
                      الأسئلة الشائعة
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* brand info section  */}
            <div className="py-8 px-6 space-y-4">
              <div className="text-2xl flex justify-end items-center gap-2 font-bold uppercase text-right">
                {/* replace with logo */}
                {/* <MdComputer className="text-amenah_pink text-4xl" /> */}
                <p className="pt-3">آمنة </p>
                <img src={logo} alt="logo" className="w-14 h-14 rounded-full" />
              </div>
              <p>
                تعتبر آمنة منصة إلكترونية تهدف إلى تسهيل عملية الشراء والبيع بين
                العملاء والبائعين
              </p>
              <div className="flex items-center justify-end gap-5 !mt-6">
                <a
                  href="https://wa.me/+201063815811"
                  className="hover:text-amenah_pink duration-200"
                  target="_blank"
                >
                  <FaWhatsapp className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/people/Amenah-Brand/100083327314414/"
                  className="hover:text-amenah_pink duration-200"
                  target="_blank"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/people/Amenah-Brand/100083327314414/"
                  className="hover:text-amenah_pink duration-200"
                  target="_blank"
                >
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          {/* copyright section  */}
          <div className="mt-2">
            <div className="text-center py-3 border-t-2 border-gray-800/10 ">
              <span className="text-sm text-black/60">
                جميع الحقوق محفوظة &copy; 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
