"use client";

import { AccordionList } from "../data";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type Ask = {
  ask: string;
  answer: string;
  id: number;
};

const Accordion = () => {
  const [openedAsk, setOpenedAsk] = useState<Ask>({
    ask: "",
    answer: "",
    id: -1,
  });
  return (
    <div className="select-none my-10 w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto rounded-md overflow-hidden border-2 border-purple-950">
      {AccordionList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`${
              index <= AccordionList.length - 1
                ? "border-b border-purple-800"
                : null
            } bg-purple-700 min-h-10 lg:min-h-20 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-150 text-slate-50 flex p-3 sm:p-5 items-center justify-center cursor-pointer flex-col`}
            onClick={() => {
              if (openedAsk.id == item.id) {
                setOpenedAsk({ ask: "", answer: "", id: -1 });
              } else {
                setOpenedAsk(item);
              }
            }}
          >
            <div className="flex justify-between items-center w-full">
              {item.ask}
              {openedAsk.id === item.id ? (
                <FaMinus className="text-[9px] sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
              ) : (
                <FaPlus className="text-[9px] sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
              )}
            </div>
            {openedAsk.id === item.id && (
              <div className="animate__animated animate__flipInX animate__faster bg-purple-600 p-2 sm:p-4 mt-4 sm:mt-5 w-full mx-1 sm:mx-2 text-[12px] sm:text-sm md:text-base lg:text-lg text-white rounded-md">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
