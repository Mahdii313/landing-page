import SingleItem from "./SingleItem";
import { fetchProducts } from "@/lib/fetchProducts";

const Products = async () => {
  let products = await fetchProducts();
  products = products.slice(0, 12);

  return (
    <div className="flex items-center flex-col">
      <div className="border-b pb-5 mt-5 mx-5 md:mx-auto max-w-full md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] min-h-[928px] gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <SingleItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cursor-pointer bg-transparent hover:scale-125 duration-100 border-purple-500 rounded-sm px-4 py-2 mt-8 text-purple-950">
        دیدن همه
      </div>
    </div>
  );
};

export default Products;
