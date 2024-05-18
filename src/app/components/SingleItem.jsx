"use client";

import Image from "next/image";
import "animate.css";
import { useEffect, useRef } from "react";

const SingleItem = ({ item }) => {
  const product = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > product.current.offsetTop - window.innerHeight) {
        product.current.classList.add("animate__animated");
        product.current.classList.add("animate__zoomIn");
      } else {
        product.current.classList.remove("animate__animated");
        product.current.classList.remove("animate__zoomIn");
      }
    });
  }, []);
  return (
    <div
      ref={product}
      className="group min-h-[450px] overflow-hidden cursor-pointer duration-200 p-3 mx-auto flex flex-col justify-start items-center rounded-sm h-full hover:bg-black w-full"
    >
      <Image
        src={item.thumbnailUrl}
        width={150}
        height={150}
        alt={"thumbnail"}
        className="group-hover:shadow-[0_0px_70px_15px_rgba(0,0,0,0.3)] duration-75 group-hover:shadow-slate-50 mb-3 rounded-md"
      />

      <h1 className="group-hover:text-slate-50 duration-300 text-xl text-center text-purple-950">
        این یک کالا است.
      </h1>
      <p
        dir="ltr"
        className="group-hover:text-slate-200 duration-300 text-slate-700 mt-auto text-left"
      >
        {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
        temporibus laboriosam itaque dignissimos porro, ducimus sint impedit
        iure pariatur ullam, quos veritatis earum nesciunt consectetur
        praesentium quod exercitationem. Quisquam, magnam!`.substring(0, 100) +
          `...`}
      </p>
    </div>
  );
};

export default SingleItem;
