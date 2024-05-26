import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Reference = () => {
  return (
    <div title="منبع گیت هاب" className="cursor-pointer">
      <Link href="https://github.com/Mahdii313/landing-page.git">
        <FaGithub size={25} />
      </Link>
    </div>
  );
};

export default Reference;
