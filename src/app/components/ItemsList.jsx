"use client";

import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

const ItemsList = ({ list, listTitle }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [openedSubmenus, setOpenedSubmenus] = useState([]);
  const [open, setOpen] = useState(false);
  const chevron = useRef(null);

  function handleMouseMove() {
    chevron.current.classList.add("translate-y-1");
  }
  function handleMouseLeave() {
    chevron.current.classList.remove("translate-y-1");
  }

  function handleSubmenus(item) {
    let submenu;
    Array(...openedSubmenus).forEach((i) => {
      if (i === item.title) {
        submenu = item.subList.map((it, index) => (
          <li
            onClick={() => {
              setSelectedItem(`${item.title}>${it.title}`);
              setOpen(!open);
              handleMouseLeave();
            }}
            key={index}
            className="text-purple-600 hover:text-purple-900 hover:bg-slate-300 cursor-pointer duration-200 py-1 w-full pr-3 rounded-lg text-right"
          >
            {it.title}
          </li>
        ));
      }
    });

    return submenu;
  }

  console.log(openedSubmenus);
  return (
    <div
      className="myList flex items-center justify-center cursor-pointer pr-3 font-semibold text-sm sm:text-base md:text-lg text-purple-900 w-4/6 h-10 rounded-sm border-2 border-purple-400 relative hover:border-purple-600 duration-300 bg-white"
      onMouseMove={() => handleMouseMove()}
      onMouseLeave={() => handleMouseLeave()}
      onClick={(e) => {
        if (e.target.classList[0] === "myList") {
          setOpen(!open);
          setOpenedSubmenus([]);
        }
      }}
    >
      <div
        ref={chevron}
        className="absolute top-[10px] right-2 sm:right-4 duration-300"
      >
        <FaChevronDown className="text-purple-800" />
      </div>
      {selectedItem || listTitle}
      <ul className="item absolute top-[38px] w-full left-0 max-h-44 overflow-auto z-20">
        {open &&
          list.map((item, index) => (
            <li
              key={index}
              onClick={(e) => {
                if (!item.haveSubList) setSelectedItem(item.title);
                if (item.haveSubList) {
                  if (Array(...openedSubmenus).includes(item.title)) {
                    let newOpenedSubmenus = Array(...openedSubmenus).filter(
                      (i) => i !== item.title
                    );
                    setOpenedSubmenus([...newOpenedSubmenus]);
                  } else {
                    setOpenedSubmenus([...openedSubmenus, item.title]);
                  }
                } else {
                  setOpen(!open);
                  setOpenedSubmenus([]);
                  handleMouseLeave();
                }
              }}
              className="item w-full bg-white px-4 min-h-10 hover:bg-slate-100 duration-200 justify-center rounded-sm flex-col flex gap-1 items-start"
            >
              <div className="flex items-center cursor-pointer">
                {item.haveSubList && (
                  <FaChevronDown size={10} className="item text-slate-900" />
                )}
                <div className="item mr-3">{item.title}</div>
              </div>
              <ul className="mr-4 mb-2 w-full">
                {openedSubmenus && handleSubmenus(item)}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ItemsList;
