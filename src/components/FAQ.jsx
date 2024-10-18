import React from "react";
import { Accordion } from "flowbite-react";
import img from "../assets/faq.png";
import Nav from "./Nav";
export default function FAQ() {
  return (
    <>
      <Nav />
      <div
        className="bg-cover bg-center h-screen w-full pt-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h2 className="py-3 px-4 text-amenah_blue text-right text-3xl font-medium">
          الأسئلة الشائعة
        </h2>
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title
              style={{ textAlign: "right", justifyContent: "end" }}
            >
              من هي آمنة؟
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-right">
                "آمنة" هي علامة تجارية متخصصة في صناعة منتجات العناية بالبشرة،
                الجسم، والشعر، بالإضافة إلى مستحضرات التجميل. تتميز جميع
                منتجاتها بكونها مصنوعة من مكونات طبيعية 100%، مما يعكس التزام
                العلامة بتقديم حلول صحية وآمنة تناسب مختلف أنواع البشرة والشعر.
                يتم تطوير جميع المنتجات بأيدي خبراء صيادلة يمتلكون خبرة واسعة في
                المجال، لضمان أعلى مستويات الجودة والإتقان. كما تفخر "آمنة"
                بهويتها العربية، حيث يتم تصنيع كافة منتجاتها محليًا وفق معايير
                دقيقة، لتلبي احتياجات المستهلك العربي بشكل مثالي وتعكس ثقافته
                وأصالته. تسعى "آمنة" إلى تعزيز ثقة العملاء بأنفسهم من خلال توفير
                منتجات طبيعية وفعالة، تجمع بين العناية اليومية والرفاهية، لتصبح
                جزءًا أساسيًا من روتين العناية والجمال لكل فرد.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              style={{ textAlign: "right", justifyContent: "end" }}
            >
              كيف يمكن الحصول على منتجات آمنة؟
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-right">
                تسوق سهل عبر الواتساب يمكن للعملاء تقديم طلباتهم بسهولة من خلال
                التواصل المباشر عبر الواتساب، مما يضمن تجربة تسوق مرنة وسريعة
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-right">
                كما يمكن متابعة كل جديد عن طريق حساباتنا على وسائل التواصل
                الاجتماعي
                <ul
                  className="list-disc pl-5 pr-5 text-gray-500 dark:text-gray-400 text-right"
                  dir="rtl"
                >
                  <li>
                    <a
                      href="https://www.instagram.com/amenah_cosmetics/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      حساب آمنة على الإنستجرام
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/Amenah-Brand/100083327314414/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      حساب آمنة على الفيسبوك
                    </a>
                  </li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              style={{ textAlign: "right", justifyContent: "end" }}
            >
              ما هي مزايا منتجات آمنة؟
            </Accordion.Title>
            <Accordion.Content>
              <ul
                className="list-disc pl-5 pr-5 text-gray-500 dark:text-gray-400 text-right"
                dir="rtl"
              >
                <li>
                  مكونات طبيعية 100% : جميع المنتجات تعتمد على مكونات طبيعية
                  آمنة مما يقلل من احتمالية تهيج البشرة أو حدوث ردود فعل تحسسية،
                  ويضمن نتائج فعالة وصحية على المدى الطويل
                </li>
                <li>
                  تصنيع بأيدي خبراء صيادلة : يتم تطوير كل منتج تحت إشراف خبراء
                  صيادلة ذوي خبرة لضمان أعلى معايير الجودة والفعالية، مع مراعاة
                  احتياجات البشرة والشعر بمكونات متوازنة
                </li>
                <li>
                  هوية عربية خالصة تفخر العلامة بكون منتجاتها مصنوعة محليًا مما
                  يعكس روح الثقافة العربية واهتمامها بالعناية الذاتية وفق
                  التقاليد المحلية
                </li>
                <li>
                  تنوع المنتجات : توفر "آمنة" حلولًا متكاملة تشمل العناية
                  بالبشرة الشعر، والجسم، إلى جانب مستحضرات تجميل طبيعية، لتلبية
                  احتياجات كل فرد بشكل متكامل
                </li>
                <li>
                  جودة وإتقان : تصنع جميع المنتجات بعناية فائقة، لضمان تجربة
                  مميزة من حيث الفاعلية والملمس والرائحة، بما يعزز شعور المستخدم
                  بالرفاهية
                </li>
                <li>
                  ملائمة لمختلف أنواع البشرة والشعر : تتميز المنتجات بتركيبات
                  لطيفة وفعالة تناسب جميع الفئات، مما يجعلها مثالية للبشرة
                  الحساسة والشعر المتطلب
                </li>
                <li>
                  رؤية مستدامة وصديقة للبيئة : بفضل الاعتماد على مكونات طبيعية،
                  تسهم منتجات "آمنة" في تعزيز مفهوم الاستدامة، مما يجعلها خيارًا
                  أخلاقيًا وصديقًا للبيئة
                </li>
                <li>
                  خالية من المواد الكيميائية الضارة: تلتزم "آمنة" بإنتاج
                  مستحضرات خالية من المواد الضارة مثل البارابين والسلفات، مما
                  يعكس حرصها على صحة العملاء على المدى الطويل
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              style={{ textAlign: "right", justifyContent: "end" }}
            >
              من هي آمنة؟
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400 text-right">
                "آمنة" هي علامة تجارية متخصصة في صناعة منتجات العناية بالبشرة،
                الجسم، والشعر، بالإضافة إلى مستحضرات التجميل. تتميز جميع
                منتجاتها بكونها مصنوعة من مكونات طبيعية 100%، مما يعكس التزام
                العلامة بتقديم حلول صحية وآمنة تناسب مختلف أنواع البشرة والشعر.
                يتم تطوير جميع المنتجات بأيدي خبراء صيادلة يمتلكون خبرة واسعة في
                المجال، لضمان أعلى مستويات الجودة والإتقان. كما تفخر "آمنة"
                بهويتها العربية، حيث يتم تصنيع كافة منتجاتها محليًا وفق معايير
                دقيقة، لتلبي احتياجات المستهلك العربي بشكل مثالي وتعكس ثقافته
                وأصالته. تسعى "آمنة" إلى تعزيز ثقة العملاء بأنفسهم من خلال توفير
                منتجات طبيعية وفعالة، تجمع بين العناية اليومية والرفاهية، لتصبح
                جزءًا أساسيًا من روتين العناية والجمال لكل فرد.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
}
