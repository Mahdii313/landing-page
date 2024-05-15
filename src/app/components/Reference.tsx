import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Reference = () => {
  return (
    <div
      title="منبع گیت هاب"
      className="absolute bottom-10 left-10 cursor-pointer"
    >
      <Link href="https://github.com/Mahdii313/landing-page.git">
        <FaGithub size={50} />
      </Link>
    </div>
  );
};

export default Reference;
