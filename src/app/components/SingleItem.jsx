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
      className="min-h-96 cursor-pointer hover:scale-105 hover:shadow-2xl p-3 mx-auto flex flex-col justify-start items-center rounded-sm h-full bg-purple-50 w-full"
    >
      <Image
        src={item.thumbnailUrl}
        width={150}
        height={150}
        alt={"thumbnail"}
        className="mb-3 rounded-3xl"
      />
      <h1 className="text-xl text-center text-purple-950">این یک کالا است.</h1>
    </div>
  );
};

export default SingleItem;
