"use client";

import { NavItems } from "../data";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../GlobalRedux/features/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import Reference from "./Reference";
import { FaChevronDown } from "react-icons/fa6";
import "animate.css";

const Navbar = () => {
  const logedIn = useSelector((state: any) => state.user.login);
  const registered = useSelector((state: any) => state.user.registered);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const submenu = useRef<HTMLElement>(null);

  function handleOpenSubmenu(item: any) {
    if (item.title === "محصولات") {
      if (submenu && submenu.current) {
        submenu.current.classList.remove("hidden");
        submenu.current.classList.add("animate__fadeInDown");
      }
    }
  }

  function handleCloseSubmenu(item: any) {
    if (item.title === "محصولات") {
      if (submenu && submenu.current) {
        submenu.current.classList.remove("animate__fadeInDown");
        submenu.current.classList.add("hidden");
      }
    }
  }
  return (
    <nav className="myNav max-w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] flex justify-between items-center mx-auto px-2 rounded-b-md select-none z-20 bg-purple-300 bg-opacity-60">
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
        } top-0 right-0 h-screen pt-32 pr-7 pl-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm md:hidden z-10 absolute`}
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
            className="cursor-pointer py-7 mx-5 text-purple-900 hover:text-purple-500 duration-300"
            key={item.id}
            onMouseMove={() => handleOpenSubmenu(item)}
            onMouseLeave={() => handleCloseSubmenu(item)}
          >
            <div className="flex gap-2 flex-row-reverse items-center">
              <Link href={item.link}>{item.title}</Link>

              {item.subMenu && <FaChevronDown size={14} />}
              {item.subMenu && (
                <div
                  ref={submenu as React.RefObject<HTMLDivElement>}
                  className="animate__animated animate__faster hidden w-96 h-96 bg-slate-50 absolute top-[84px]"
                ></div>
              )}
            </div>
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
