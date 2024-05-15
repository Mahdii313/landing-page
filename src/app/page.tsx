import type { Metadata } from "next";
import ProductsFilter from "./components/ProductsFilter";
import Button from "./components/Button";

export const metadata: Metadata = {
  title: "خانه",
  description: "خانه است",
};

export default function Home() {
  return (
    <section className="flex xl:flex-row items-center flex-col-reverse mt-10 lg:mt-32 overflow-hidden gap-10 xl:gap-0">
      <div className="absolute rounded-full h-[250px] w-[400px] md:h-[500px] md:w-[1000px] lg:h-[700px] lg:w-[1400px] top-52 bg-purple-200 bg-opacity-40 backdrop-blur-md -z-10 -right-48 md:-right-96"></div>

      <div className="mx-auto xl:mx-16 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-1/3 text-center p-5 h-96">
        <h1 className="text-purple-600 text-sm lg:text-xl xl:text-2xl font-semibold text-right mb-8">
          چه چیزی نیاز دارید؟
        </h1>
        <ProductsFilter />
      </div>
      <div className="w-full lg:w-3/5 flex justify-center items-center flex-col gap-2 sm:gap-7">
        <div className="text-center drop-shadow-xl selection:bg-pink-200 selection:text-slate-100 font-bold text-3xl sm:text-4xl xl:text-5xl xl2:text-7xl bg-gradient-to-b from-purple-900 to-purple-500 inline-block p-10 text-transparent bg-clip-text">
          با ما{" "}
          <span className="bg-gradient-to-l from-[#F27121] via-[#E94057] to-[#8A2387] bg-clip-text py-5">
            بدون واسطه
          </span>{" "}
          خرید کنید
        </div>
        <div className="p-4 max-w-[400px] lg:max-w-[600px] flex justify-center text-base md:text-xl lg:text-2xl text-slate-700 bg-opacity-50 backdrop-blur-md rounded-md mb-10 selection:bg-pink-200">
          با ما بدون دردسر،درددست و دردپا سفارش بدهید و درب منزل تحویل بگیرید،
          بدون واسطه و با قیمت تولیدی.
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
    </section>
  );
}
