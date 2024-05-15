import { FaHome, FaInfo } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";

export const NavItems = [
  {
    title: "خانه",
    link: "/",
    id: 1,
    icon: <FaHome />,
  },
  {
    title: "محصولات",
    link: "/products",
    id: 2,
    icon: <AiFillProduct />,
  },
  {
    title: "درباره ما",
    link: "/aboutus",
    id: 3,
    icon: <FaInfo />,
  },
  {
    title: "تماس با ما",
    link: "/contactus",
    id: 4,
    icon: <MdOutlineMailOutline />,
  },
];

export const ProductsList = [
  {
    title: "لوازم خانگی",
    haveSubList: true,
    subList: [
      {
        title: "آشپز خانه",
        haveSubList: false,
      },
      { title: "سالن حال", haveSubList: false },
      {
        title: "اتاق خواب",
        haveSubList: false,
      },
      {
        title: "لوازم کودک",
        haveSubList: false,
      },
    ],
  },
  {
    title: "لوازم بهداشتی",
    haveSubList: false,
  },
  {
    title: "پوشاک",
    haveSubList: true,
    subList: [
      {
        title: "مردانه",
        haveSubList: true,
        subList: [
          { title: "لباس", haveSubList: false },
          { title: "کفش", haveSubList: false },
        ],
      },
      {
        title: "زنانه",
        haveSubList: true,
        subList: [
          { title: "لباس", haveSubList: false },
          { title: "کفش", haveSubList: false },
        ],
      },
    ],
  },
  {
    title: "لوازم تزئینی",
    haveSubList: true,
    subList: [
      {
        title: "ساعت",
        haveSubList: false,
      },
      {
        title: "گردنبند",
        haveSubList: false,
      },
      {
        title: "دستبند",
        haveSubList: false,
      },
      {
        title: "انگشتر",
        haveSubList: false,
      },
      {
        title: "جواهرات",
        haveSubList: false,
      },
    ],
  },
];

export const Provinces = [
  { title: "تهران", haveSubList: false },
  { title: "خراسان رضوی", haveSubList: false },
  { title: "کرج", haveSubList: false },
  { title: "قم", haveSubList: false },
  { title: "فارس", haveSubList: false },
  { title: "بوشهر", haveSubList: false },
  { title: "اصفهان", haveSubList: false },
  { title: "آذربایجان شرقی", haveSubList: false },
  { title: "هرمزگان", haveSubList: false },
  { title: "یزد", haveSubList: false },
  { title: "سیاستان و بلوچستان", haveSubList: false },
];
