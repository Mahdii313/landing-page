"use client";

import Image from "next/image";
import "animate.css";
import { useEffect, useRef } from "react";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../GlobalRedux/features/cartSlice";

const SingleItem = ({ item }) => {
  const product = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (product.current.offsetTop) {
        if (window.scrollY > product.current.offsetTop - window.innerHeight) {
          product.current.classList.add("animate__animated");
          product.current.classList.add("animate__zoomIn");
        } else {
          product.current.classList.remove("animate__animated");
          product.current.classList.remove("animate__zoomIn");
        }
      }
    });
  }, []);

  function setThemeColor(index) {
    let color;
    switch (index) {
      case 0:
        color = "#711db0";
        break;
      case 1:
        color = "#c21292";
        break;
      case 2:
        color = "#ef4040";
        break;
      case 3:
        color = "#ffa732";
        break;
    }

    return color;
  }
  return (
    <div
      ref={product}
      style={{
        borderColor: setThemeColor(item.classId),
        boxShadow: `0 0 4px ${setThemeColor(item.classId)}`,
      }}
      className="min-h-[500px] mx-auto flex flex-col justify-start items-center h-full w-full border"
    >
      <div className="px-3 flex flex-col items-center">
        <div className="bg-slate-100 relative h-32 flex items-center w-60 justify-center bg-opacity-70 rounded-sm mt-10">
          <div
            style={{ backgroundColor: setThemeColor(item.classId) }}
            className="absolute bottom-3 right-3 w-4 h-4 rounded-full"
          ></div>
          <Image
            src={item.thumbnailUrl}
            width={150}
            height={150}
            alt={"thumbnail"}
            className="rounded-md"
          />
        </div>
        <h1 className="mt-16 text-xl text-center text-purple-950">
          این یک کالا است.
        </h1>
        <p
          dir="ltr"
          className="text-slate-700 mt-5 text-center text-sm sm:text-base"
        >
          {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
        temporibus laboriosam itaque dignissimos porro, ducimus sint impedit
        iure pariatur ullam, quos veritatis earum nesciunt consectetur
        praesentium quod exercitationem. Quisquam, magnam!`.substring(0, 50) +
            `...`}
        </p>{" "}
        <div
          style={{ color: setThemeColor(item.classId) }}
          className="font-semibold mt-5"
        >
          {new Intl.NumberFormat("fa-IR").format(10000)} تومان
        </div>
        <StarRating rate={item.id % 5} />
      </div>
      <button
        style={{ backgroundColor: setThemeColor(item.classId) }}
        className="w-full text-white h-10 mt-auto active:brightness-125"
        onClick={() => dispatch(addToCart({ id: item.id, title: item.title }))}
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default SingleItem;
