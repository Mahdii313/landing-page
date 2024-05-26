import { FaHome, FaInfo } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";

export const NavItems = [
  {
    title: "خانه",
    link: "/",
    id: 1,
    icon: <FaHome />,
    subMenu: null,
  },
  {
    title: "محصولات",
    link: "/products",
    id: 2,
    icon: <AiFillProduct />,
    subMenu: [
      {
        title: "لوازم خانگی",
        menu: ["آشپز خانه", "سالن حال", "اتاق خواب", "لوازم کودک"],
        img: "/lavazem-khanegi.jpg",
      },
      {
        title: "لوازم بهداشتی",
      },
      {
        title: "پوشاک",
        menu: ["زنانه", "مردانه"],
        img: "/clothes.jpg",
      },
      {
        title: "لوازم تزئینی",
        menu: ["ساعت", "گردنبند", "دستبند", "انگشتر", "جواهرات"],
        img: "/decoratives.jpg",
      },
    ],
  },
  {
    title: "درباره ما",
    link: "/aboutus",
    id: 3,
    icon: <FaInfo />,
    subMenu: null,
  },
  {
    title: "تماس با ما",
    link: "/contactus",
    id: 4,
    icon: <MdOutlineMailOutline />,
    subMenu: null,
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

export const ProductsSlideItems = [
  { id: 1, url: "/slide/couch.png", title: "مبل", description: "این مبل است" },
  { id: 2, url: "/slide/date.png", title: "خرما", description: "این خرما است" },
  {
    id: 3,
    url: "/slide/mobile.png",
    title: "تلفن همراه",
    description: "این تلفن همراه است",
  },
  {
    id: 4,
    url: "/slide/watch.png",
    title: "ساعت مچی",
    description: "این ساعت مچی است",
  },
];

export const AccordionList = [
  {
    ask: "آیا می توانم در هر زمان اشتراک خود را لغو کنم؟",
    answer:
      "مطمئن. اشتراک پولی شما را می‌توانید در هر زمان با جابجایی لغو کنید",
    id: 0,
  },
  {
    ask: "آیا می توانم بعداً برنامه خود را تغییر دهم؟",
    answer:
      "کاملا! شما می توانید برنامه خود را در هر زمان ارتقا یا کاهش دهید. پول پرداخت شده برای اشتراک قبلی مجدداً به طرح جدید محاسبه می شود.",
    id: 1,
  },
  {
    ask: "آیا اشتراک من را به طور خودکار تمدید می کنید؟",
    answer:
      "بله، اشتراک شما به طور خودکار با توجه به دوره پرداخت شما تمدید می شود.",
    id: 2,
  },
  {
    ask: "آیا تخفیف هم می دهید؟",
    answer: "خیر",
    id: 3,
  },
  { ask: "آیا می توانم درخواست بازپرداخت کنم؟", answer: "خیر", id: 4 },
];

export const FooterItems = [
  { title: "خانه" },
  {
    title: "محصولات",
    subMenu: ["لوازم خانگی", "لوازم بهداشتی", "پوشاک", "لوازم تزئینی"],
  },
  { title: "درباره ما" },
  { title: "تماس با ما" },
];
