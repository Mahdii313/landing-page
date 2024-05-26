import Image from "next/image";

const MegaMenu = ({ menu }: any) => {
  return (
    <div className="cursor-default flex flex-row justify-between items-center absolute top-0 right-[142px] w-[300px] lg:w-[400px] xl:w-[500px] min-h-52 bg-slate-50 bg-opacity-95 z-20 text-purple-600">
      <div className="min-w-32">
        {menu.menu.map((item: any, index: number) => (
          <div
            className={`cursor-pointer py-2 text-xl px-4 mr-2 hover:bg-slate-300 rounded-xl duration-100 my-1`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="p-2">
        <Image
          src={menu.img}
          alt={menu.title}
          width={200}
          height={150}
          className="ml-10"
        />
      </div>
    </div>
  );
};

export default MegaMenu;
