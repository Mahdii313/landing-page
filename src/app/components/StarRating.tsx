import { FaStar } from "react-icons/fa";

type Rate = {
  rate: 1 | 2 | 3 | 4 | 5;
  className?: string;
};

const StarRating = ({ rate, className }: Rate) => {
  return (
    <div className={`flex mt-2 ${className}`}>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={20}
          className={`${index <= rate ? "text-yellow-400" : "text-slate-300"}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
