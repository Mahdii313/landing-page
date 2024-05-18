import type { Metadata } from "next";
import ProductsFilter from "./components/ProductsFilter";
import Button from "./components/Button";
import Products from "./components/Products";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "خانه",
  description: "خانه است",
};

export default function Home() {
  return (
    <>
      <section className="bg-heroimg bg-cover mx-auto pt-[130px] lg:pt-[218px] overflow-hidden -mt-[90px] pb-10 xl:pb-60">
        <div className="mx-auto max-w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] justify-between gap-10 xl:gap-0 flex xl:flex-row items-center flex-col-reverse">
          <div className="absolute rounded-l-full h-[250px] w-[208px] sm:h-[400px] sm:w-[308px] md:h-[500px] md:w-[808px] lg:h-[700px] lg:w-[1108px] top-96 md:top-36 bg-purple-200 bg-opacity-40 backdrop-blur-md right-0 md:-right-96"></div>

          <div className="w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3 text-center h-96 z-10">
            <h1 className="text-slate-200 bg-purple-500 bg-opacity-55 p-2 rounded-sm text-base lg:text-xl xl:text-2xl font-semibold text-right mb-8">
              چه چیزی نیاز دارید؟
            </h1>
            <ProductsFilter />
          </div>
          <div className="bg-slate-50 bg-opacity-50 p-5 rounded-sm w-full lg:w-3/5 flex justify-center items-center flex-col gap-2 sm:gap-7 z-10">
            <div className="bgc font-iranxbold text-center drop-shadow-xl selection:bg-pink-200 selection:text-slate-100 font-bold text-3xl sm:text-4xl xl:text-5xl xl2:text-7xl bg-gradient-to-b from-purple-900 to-purple-500 inline-block p-10 text-transparent">
              با ما{" "}
              <span className="bgc bg-gradient-to-l from-[#F27121] via-[#E94057] to-[#8A2387] py-5">
                بدون واسطه
              </span>{" "}
              خرید کنید
            </div>
            <div className="font-iranbold p-4 max-w-[400px] lg:max-w-[600px] flex justify-center text-base md:text-xl lg:text-2xl text-slate-700 mb-10 selection:bg-pink-200">
              با ما بدون دردسر، درددست و دردپا سفارش بدهید و درب منزل تحویل
              بگیرید، بدون واسطه و با قیمت تولیدی
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-5">
              {" "}
              <Button
                title={"فروشنده هستید؟"}
                varient="information"
                icon="seller"
              />
              <Button title={"نصب برنامه"} varient="primary" icon="download" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Suspense fallback={<div>در حال بارگیری محصولات</div>}>
          <Products />
        </Suspense>
      </section>
    </>
  );
}
