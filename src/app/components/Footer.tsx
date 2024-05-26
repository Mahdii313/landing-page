import { FooterItems } from "../data";
import Reference from "./Reference";

const Footer = () => {
  return (
    <footer className="box-border bg-slate-900 min-h-[200px] md:min-h-[300px] relative p-5">
      <div className="w-full text-white grid grid-cols-2 sm:grid-cols-4">
        {FooterItems.map((item, index) => {
          return (
            <div className="h-40 w-fit mx-auto md:min-h-52">
              <h2 className="tex-lg md:text-2xl mb-2 cursor-pointer">
                {item.title}
              </h2>
              {item.subMenu
                ? item.subMenu.map((si, sindex) => (
                    <div
                      key={sindex}
                      className="text-sm md:text-base text-slate-100 cursor-pointer min-h-7 hover:underline hover:underline-offset-4 max-w-fit pb-1"
                    >
                      {si}
                    </div>
                  ))
                : null}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-2 left-0 w-full text-[9px] md:text-lg text-white flex justify-center items-center gap-2">
        مهدی رستمی این صفحه را ساخته است &copy;
        <Reference />
      </div>
    </footer>
  );
};

export default Footer;
