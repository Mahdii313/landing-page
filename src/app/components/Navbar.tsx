"use client";

import { NavItems } from "../data";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaUser,
  FaChevronLeft,
  FaChevronUp,
  FaWindowClose,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import MegaMenu from "./MegaMenu";
import "animate.css";
import Signup from "./Signup";
import Signin from "./Signin";
import Cart from "./Cart";
import { signinUser } from "../GlobalRedux/features/userSlice";

const Navbar = () => {
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [megamenu, setMegamenu] = useState({});
  const submenu = useRef<HTMLElement>(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuSubmenuOpen, setSubmenuSubmenuOpen] = useState([]);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const cartItems = useSelector((state: any) => state.cart);

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
        setMegamenu({});
      }
    }
  }

  function handleSubSubmenu(si: any) {
    let myMap = si.menu.map((sssi: any, index: number) => {
      return (
        <li
          key={index}
          className="hover:text-purple-600 py-1 px-2 duration-100"
        >
          {sssi}
        </li>
      );
    });

    return myMap;
  }

  function countCartItems(): number {
    let count = 0;
    for (let i = 0; i < cartItems.length; i++) {
      count += cartItems[i].count;
    }
    return count;
  }
  return (
    <>
      {openSignup && (
        <div className="absolute top-0 left-0 h-full w-screen">
          <div className="sticky z-50 top-0 left-0 w-screen h-screen bg-slate-400 bg-opacity-70 backdrop-blur-sm flex items-center justify-center">
            <FaWindowClose
              className="text-6xl text-purple-600 absolute left-10 top-10"
              onClick={() => setOpenSignup(false)}
            />
            <Signup setOpenSignup={setOpenSignup} />
          </div>
        </div>
      )}

      {openSignin && (
        <div className="absolute top-0 left-0 h-full w-screen">
          <div className="sticky z-50 top-0 left-0 w-screen h-screen bg-slate-400 bg-opacity-70 backdrop-blur-sm flex items-center justify-center">
            <FaWindowClose
              className="text-6xl text-purple-600 absolute left-10 top-10"
              onClick={() => setOpenSignin(false)}
            />
            <Signin setOpenSignin={setOpenSignin} />
          </div>
        </div>
      )}
      <nav className="myNav max-w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] flex justify-between items-center mx-auto px-2 rounded-b-md select-none z-20 bg-purple-300 bg-opacity-60">
        {open ? (
          <IoClose
            size={25}
            className="md:hidden z-50 cursor-pointer"
            onClick={() => {
              setOpen((open) => !open);
              setSubmenuSubmenuOpen([] as any);
              setSubmenuOpen(false);
            }}
          />
        ) : (
          <GiHamburgerMenu
            size={25}
            className="md:hidden z-50 cursor-pointer"
            onClick={() => {
              setOpen((open) => !open);
            }}
          />
        )}
        <div
          className={`${
            open ? "flex" : "hidden"
          } top-0 left-0 h-screen w-screen bg-transparent md:hidden z-40 absolute`}
          onClick={(e) => {
            // @ts-ignore
            if (e.target.classList[1] === "top-0") {
              setOpen(false);
            }
          }}
        >
          <ul className="animate__animated animate__slideInRight animate__faster flex flex-col gap-5 h-screen bg-slate-200 bg-opacity-55 backdrop-blur-sm pt-20">
            {NavItems.map((item) => (
              <li
                className="flex-col border-b-[1px] border-slate-400 pb-2 mx-5 text-purple-900 hover:text-purple-500 duration-300 font-semibold text-xl flex items-start"
                key={item.id}
              >
                <Link
                  className="mr-4 flex gap-3 items-center"
                  href={"#section1"}
                  onClick={() => {
                    if (item.subMenu) setSubmenuOpen(!submenuOpen);
                  }}
                >
                  <div className="text-black">{item.icon}</div>
                  {item.title}
                  {item.subMenu &&
                    (submenuOpen ? (
                      <FaChevronUp size={10} className="mr-2" />
                    ) : (
                      <FaChevronDown size={10} className="mr-2" />
                    ))}
                </Link>
                {submenuOpen && item.subMenu && (
                  <ul className="w-3/4 flex flex-col gap-2 text-purple-950 text-base mr-2 mt-4">
                    {item.subMenu?.map((si: any, index: number) => {
                      return (
                        <li
                          className="flex flex-col justify-between items-center cursor-pointer hover:text-purple-600 duration-75"
                          key={index}
                          onClick={() => {
                            let submenuSubmenuOpenArr: string[] = Array(
                              ...submenuSubmenuOpen
                            );

                            if (submenuSubmenuOpenArr.includes(si.title)) {
                              submenuSubmenuOpenArr =
                                submenuSubmenuOpenArr.filter(
                                  (i) => i != si.title
                                );
                              // @ts-ignore
                              setSubmenuSubmenuOpen(submenuSubmenuOpenArr);
                            } else {
                              setSubmenuSubmenuOpen([
                                // @ts-ignore
                                ...submenuSubmenuOpen,
                                // @ts-ignore
                                si.title,
                              ]);
                            }
                          }}
                        >
                          <div className="flex justify-between w-5/6 items-center">
                            {si.title}
                            {si.menu && <FaChevronDown size={7} />}
                          </div>
                          {submenuSubmenuOpen.map((ssi: any, index) => {
                            if (ssi == si.title && si.menu)
                              return (
                                <ul
                                  key={index}
                                  className="mt-2 text-purple-950 border-b border-r border-r-slate-400 border-b-slate-400 pb-2 pr-3 mb-1"
                                >
                                  {handleSubSubmenu(si)}
                                </ul>
                              );
                          })}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          {user.username ? (
            <div className="font-semibold text-purple-950 flex flex-row-reverse gap-3 items-center">
              <div className="flex flex-row items-center gap-2 sm:gap-3 bg-slate-200 rounded-2xl p-2">
                <FaUser />
                <h3 className="text-sm sm:text-base">{user.username}</h3>
              </div>
              <div
                className="mx-1 sm:mx-2 text-base sm:text-lg hover:bg-red-900 hover:text-slate-50 transition-all hover:border-2 border-red-900 px-4 py-1 bg-slate-50 border-2 font-semibold text-red-900 duration-300 rounded-md"
                onClick={() => dispatch(signinUser({}))}
              >
                خارج شوید
              </div>
            </div>
          ) : (
            <>
              <button
                className="mx-2 text-lg hover:bg-slate-50 hover:text-purple-900 transition-all hover:border-2 hover:border-purple-900 px-4 py-1 bg-purple-900 border-2 border-purple-900 duration-300 font-semibold text-slate-50 rounded-md"
                onClick={() => {
                  setOpenSignup(true);
                }}
              >
                ثبت نام
              </button>
              <button
                className="mx-2 text-lg hover:bg-purple-900 hover:text-slate-50 transition-all hover:border-2 border-purple-900 px-4 py-1 bg-slate-50 border-2 font-semibold text-purple-900 duration-300 rounded-md"
                onClick={() => {
                  setOpenSignin(true);
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
              className="cursor-pointer py-7 mx-5 text-purple-900 hover:text-purple-500 duration-300 relative"
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
                    className="animate__animated animate__faster hidden w-[140%] -left-5 min-h-32 bg-slate-50 shadow-xl rounded-sm absolute top-[84px]"
                  >
                    <ul className="flex flex-col text-sm relative p-2">
                      {item.subMenu.map((si, index) => {
                        return (
                          <li
                            key={index}
                            className={`${
                              index !== 3 ? "border-b" : null
                            } hover:text-purple-700 duration-75 py-2 flex justify-between items-center group`}
                            onClick={() => {
                              if (si.menu) setMegamenu(si);
                              else setMegamenu({});
                            }}
                          >
                            <div>{si.title}</div>
                            {si.menu && (
                              <FaChevronLeft
                                size={10}
                                className="ml-2 text-purple-950 group-hover:-translate-x-1 duration-100"
                              />
                            )}
                            {si == megamenu && <MegaMenu menu={megamenu} />}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div
          className="cartDiv cursor-pointer"
          onClick={(e) => {
            if (
              // @ts-ignore
              e.target.localName == "img" ||
              // @ts-ignore
              e.target.classList[0] === "cartDiv"
            )
              setOpenCart(!openCart);
          }}
        >
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          {!openCart && (
            <div className="cartDiv relative">
              <div className="cartDiv text-white bg-red-500 size-5 rounded-full absolute flex items-center justify-center text-[10px] bottom-0 right-0">
                {Intl.NumberFormat("fa-IR").format(countCartItems())}
              </div>
            </div>
          )}
          {openCart && <Cart />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
