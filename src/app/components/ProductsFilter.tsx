import React from "react";
import ItemsList from "./ItemsList";
import { ProductsList, Provinces } from "../data";
import Button from "./Button";

const ProductsFilter = () => {
  return (
    <div className="rounded-sm py-5 pr-4 pl-6 bg-purple-500 bg-opacity-55">
      <div className="flex items-center justify-between flex-row-reverse mb-5">
        <div className="mr-5 text-[9px] sm:text-base font-semibold text-purple-900">
          : نوع کالا
        </div>
        <ItemsList
          list={ProductsList}
          listTitle={"کالا مورد نظر را انتخاب کنید"}
        />
      </div>
      <div className="flex items-center justify-between flex-row-reverse mb-5">
        <div className="mr-5 text-[9px] sm:text-base font-semibold text-purple-900">
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
