import React from "react";
import ItemsList from "./ItemsList";
import { ProductsList, Provinces } from "../data";
import Button from "./Button";

const ProductsFilter = () => {
  return (
    <div className="shadow-xl shadow-slate-300 rounded-xl py-5 pr-4 pl-6 border bg-purple-500 bg-opacity-15 border-slate-300">
      <div className="flex items-center justify-between flex-row-reverse mb-5">
        <div className="mr-5 text-[9px] sm:text-lg font-semibold text-purple-900">
          : نوع کالا
        </div>
        <ItemsList
          list={ProductsList}
          listTitle={"کالا مورد نظر را انتخاب کنید"}
        />
      </div>
      <div className="flex items-center justify-between flex-row-reverse mb-5">
        <div className="mr-5 text-[9px] sm:text-lg font-semibold text-purple-900">
          : محل سکونت
        </div>
        <ItemsList list={Provinces} listTitle={"محل سکونت را انتخاب کنید"} />
      </div>
      <div className="flex justify-center">
        <Button title={"جست و جو"} icon="search" varient="search" />
      </div>
    </div>
  );
};

export default ProductsFilter;
