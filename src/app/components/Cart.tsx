"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../GlobalRedux/features/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "./Button";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="cursor-default absolute top-full w-[300px] sm:w-[400px] left-0 border rounded-md border-purple-600 bg-slate-50 flex justify-between p-2 sm:p-3 flex-col gap-2">
      {cartItems.length > 0 && (
        <div className="flex flex-col justify-center items-center">
          {cartItems.map((i: any, index: number) => (
            <div
              key={index}
              className={`flex flex-row-reverse w-full justify-between py-2 border-b border-b-purple-500`}
            >
              <div className="flex items-center flex-row-reverse">
                <FaMinus
                  className="text-base sm:text-lg text-red-500 cursor-pointer"
                  onClick={() =>
                    dispatch(removeFromCart({ id: i.id, title: i.title }))
                  }
                />
                <div className="w-7 sm:w-10 flex justify-center items-center text-sm sm:text-base">
                  {Intl.NumberFormat("fa-IR").format(i.count)}
                </div>
                <FaPlus
                  className="text-base sm:text-lg text-green-500 cursor-pointer"
                  onClick={() =>
                    dispatch(addToCart({ id: i.id, title: i.title }))
                  }
                />
              </div>
              <h2 className="text-purple-800 font-semibold text-sm sm:text-base">
                {i.title.substring(0, 30)}
              </h2>
            </div>
          ))}
          <Button title={"اتمام خرید"} varient="search" className="mt-5" />
        </div>
      )}
      {cartItems.length === 0 && (
        <h2 className="text-lg text-purple-900 text-center">
          سبد خرید شما خالی است
        </h2>
      )}
    </div>
  );
};

export default Cart;
