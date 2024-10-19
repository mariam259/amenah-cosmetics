import React from "react";
import about from "../assets/about.png";
export default function About() {
  return (
    <div className="container">
      {/* <section className="h-screen w-full mt-20"> */}
      <div className="mt-20 mb-16">
        <div className="flex flex-col sm:flex-row justify-between py-9 px-5  ">
          <div className="flex justify-center items-center mb-6 sm:mt-0">
            <img
              src={about}
              alt="About Us"
              className="w-96 h-96 pb-10 sm:mt-0 hidden sm:block"
            />
          </div>
          <div className="w-full sm:w-1/2 mx-auto text-right items-center pt-14 sm:mt-0 ">
            <h1 className="text-amenah_blue font-bold text-3xl text-center pb-5 mb-4 sm:mb-0">
              من نحن
            </h1>
            <p className="text-amenah_blue font-medium text-lg">
              في "آمنة"، نؤمن أن الجمال الحقيقي يبدأ من العناية الصادقة. لهذا،
              نقدم لكِ مجموعة متكاملة من منتجات العناية بالبشرة، الجسم، والشعر
              المصنوعة من مكونات طبيعية 100% وبأيدي خبراء صيادلة، لضمان الجودة
              والإتقان في كل تفصيلة. كل منتج يحمل في طياته لمسة من الأصالة
              العربية، ليعكس هويتكِ الفريدة ويمنحكِ تجربة عناية آمنة وفعالة.
              سواء كنتِ تبحثين عن إشراقة طبيعية، ترطيب عميق، أو روتين يومي
              للعناية، ستجدين لدينا ما يناسبكِ
            </p>
            <div className="flex justify-around pt-7 mb-0 sm:mb-7">
              <p className="border-solid border-4 p-3 rounded-xl border-amenah_pink text-amenah_blue font-bold">
                +مبيعات 100
              </p>
              <p className="border-solid border-4 p-3 rounded-xl border-amenah_pink text-amenah_blue font-bold">
                +عملاء 100
              </p>
              <p className="border-solid border-4 p-3 rounded-xl border-amenah_pink text-amenah_blue font-bold">
                +منتجات 50
              </p>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
    </div>
  );
}
