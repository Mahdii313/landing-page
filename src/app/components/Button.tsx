"use client";

import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoPersonSharp, IoSearchOutline } from "react-icons/io5";

type TButton = {
  title: string;
  icon?: "download" | "seller" | "search";
  varient: "primary" | "information" | "search";
};

const Button = ({ title, icon, varient }: TButton) => {
  function setIcon() {
    switch (icon) {
      case "download":
        return <MdOutlineFileDownload size={25} />;
      case "seller":
        return <IoPersonSharp size={25} />;
      case "search":
        return <IoSearchOutline size={25} />;
    }
  }

  return (
    <button
      className={`text-sm sm:text-base rounded-full py-2 sm:py-3 px-6 text-slate-50 flex items-center flex-row-reverse gap-3 hover:brightness-75 duration-300 ${
        varient === "primary"
          ? "bg-blue-600"
          : varient === "search"
          ? "bg-red-600"
          : varient === "information"
          ? "bg-green-500"
          : null
      }`}
    >
      {title}
      {setIcon()}
    </button>
  );
};

export default Button;
