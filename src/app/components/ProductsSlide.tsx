"use client";

import { ProductsSlideItems } from "../data";
import Button from "./Button";
import { useState, useRef, RefObject } from "react";
import StarRating from "./StarRating";

const ProductsSlide = () => {
  const [openedImage, setOpenedImage] = useState({ current: null, prev: null });
  const slideContainer = useRef(null);

  function handleSizes() {
    if (slideContainer.current) {
      if (openedImage.current) {
        // @ts-ignore
        if (openedImage.current.classList[0] != "slideContainer") {
          // @ts-ignore
          openedImage.current.style.width = "900px";
        }

        if (openedImage.prev && openedImage.prev != openedImage.current) {
          // @ts-ignore
          openedImage.prev.style.width = null;
        }
      }
    }
  }

  handleSizes();

  return (
    <>
      <div className="mx-auto text-purple-900 text-4xl mt-10 font-iranxbold max-w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        محصولات برتر
      </div>

      <div
        ref={slideContainer}
        className="slideContainer py-10 mx-auto h-[500px] md:h-[700px] lg:h-[1000px] max-w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] flex"
      >
        {ProductsSlideItems.map((item) => {
          return (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.url})` }}
              className={`${item.id} transition-all ease-in rounded-lg w-1/4 h-full bg-cover mx-[1px] flex justify-center items-center`}
              onMouseOver={(e) => {
                // @ts-ignore
                if (e.target.classList[0] === "slideContainer") {
                  return;
                }
                // @ts-ignore
                if (Number.isInteger(parseInt(e.target.classList[0]))) {
                  // @ts-ignore
                  setOpenedImage((prev) => ({
                    current: e.target,
                    prev: prev.current,
                  }));
                } else {
                  // @ts-ignore
                  if (e.target.parentElement != openedImage.current) {
                    // @ts-ignore
                    if (e.target.parentElement.parentElement != openedImage) {
                      // @ts-ignore
                      setOpenedImage((prev) => ({
                        // @ts-ignore
                        current: e.target.parentElement.parentElement,
                        prev: prev.current,
                      }));
                    } else {
                      // @ts-ignore
                      setOpenedImage((prev) => ({
                        // @ts-ignore
                        current: e.target.parentElement.parentElement,
                        prev: prev.current,
                      }));
                    }
                  }
                }
              }}
            >
              {window.innerWidth >= 515 &&
                openedImage.current &&
                // @ts-ignore
                openedImage.current.classList[0] != item.id && (
                  <h1 className="-rotate-90 font-iranxbold text-slate-50 text-[10px] md:text-[18px] lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    {item.title}
                  </h1>
                )}
              {window.innerWidth >= 515 && !openedImage.current && (
                <h1 className="-rotate-90 font-iranxbold text-slate-50 text-[10px] md:text-[18px] lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  {item.title}
                </h1>
              )}
              {openedImage.current &&
                // @ts-ignore
                openedImage.current.classList[0] == item.id && (
                  <div className="h-full w-full p-10 relative">
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-50 text-right border-b-2 border-b-white pb-2">
                      {item.title}
                    </h2>
                    <StarRating rate={5} className="py-3" />
                    <p className="text-slate-50 text-base sm:text-xl md:text-2xl py-1 sm:py-3">
                      {item.description}
                    </p>
                    <Button
                      title={"خرید کنید"}
                      varient="shop"
                      className="absolute bottom-5 md:bottom-10 right-5 md:right-10"
                    />
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductsSlide;
