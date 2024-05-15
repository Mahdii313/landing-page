"use client";

import { NavItems } from "../data";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../GlobalRedux/features/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import Reference from "./Reference";

const Navbar = () => {
  const logedIn = useSelector((state: any) => state.user.login);
  const registered = useSelector((state: any) => state.user.registered);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <nav className="container flex justify-between items-center mx-auto px-2 py-5 rounded-b-md select-none">
      <Toaster />
      {open ? (
        <IoClose
          size={25}
          className="md:hidden z-20 cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        />
      ) : (
        <GiHamburgerMenu
          size={25}
          className="md:hidden z-20 cursor-pointer"
          onClick={() => setOpen((open) => !open)}
        />
      )}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-0 right-0 h-screen pt-32 pr-7 pl-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm md:hidden z-10`}
      >
        <ul className="flex flex-col gap-5">
          {NavItems.map((item) => (
            <li
              className="border-b-[1px] border-slate-400 pb-2 cursor-pointer mx-5 text-purple-900 hover:text-purple-500 duration-300 font-semibold text-xl flex items-center"
              key={item.id}
            >
              <div className="text-black">{item.icon}</div>
              <Link className="mr-4" href={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
          <li className="block md:hidden">
            <Reference />
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        {logedIn ? (
          <div className="font-semibold text-purple-950 flex flex-row-reverse gap-3 items-center">
            <FaUser />
            user: {Math.floor(Math.random() * 10000000000000)}
          </div>
        ) : (
          <>
            <button
              className="mx-2 text-lg hover:bg-slate-50 hover:text-purple-900 transition-all hover:border-2 hover:border-purple-900 px-4 py-1 bg-purple-900 border-2 border-purple-900 duration-300 font-semibold text-slate-50 rounded-md"
              onClick={() => {
                dispatch(register());
              }}
            >
              ثبت نام
            </button>
            <button
              className="mx-2 text-lg hover:bg-purple-900 hover:text-slate-50 transition-all hover:border-2 border-purple-900 px-4 py-1 bg-slate-50 border-2 font-semibold text-purple-900 duration-300 rounded-md"
              onClick={() => {
                if (!registered) return toast.error("ابتدا ثبت نام شوید");
                dispatch(login());
                return toast.success("با موفقیت وارد شدید");
              }}
            >
              ورود
            </button>
          </>
        )}
      </div>
      <ul className="hidden md:flex items-center font-semibold text-xl">
        {NavItems.map((item) => (
          <li
            className="cursor-pointer mx-5 text-purple-900 hover:text-purple-500 duration-300"
            key={item.id}
          >
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
