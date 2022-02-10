import Link from "next/link";
import { useState } from "react";
import {
  MenuIcon,
  FacebookNegativeIcon,
  TwitterNegativeIcon,
  InstagramNegativeIcon,
  YoutubeNegativeIcon,
  FooterIcon,
} from "@allIcons/index";

const Header = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex justify-between h-[103px] w-full ">
      <Link href="/">
        <div className="cursor-pointer flex items-center gap-4 mt-2 ml-8 sm:ml-[135px] font-bold text-2xl">
          <img className="w-16 h-16" src="/Logo.png" alt="sss" />
          <span>REDX</span>
        </div>
      </Link>
      <ul className="sm:flex flex-wrap  mr-[135px] invisible lg:visible">
        <li className="menu-item">HAKKIMDA</li>
        <Link href="/photos">
          <li className="menu-item">FOTOĞRAFLAR</li>
        </Link>
        <Link href="/form">
          <li className="menu-item">FORM</li>
        </Link>
        <li className="menu-item">İLETİŞİM</li>
      </ul>
      <div
        onClick={() => setActive(!active)}
        className={`font-bold items-center transition-all ease-in duration-200 lg:invisible absolute leading-[17px] z-50 h-[1350px] xl:h-screen w-full bg-black text-white ${
          active == true ? "invisible" : ""
        }`}
      >
        <ul className="w-full">
          <li className="nav-p  mt-[116px] border-t border-b border-solid border-white pt-5 pb-5">
            HAKKIMDA
          </li>
          <Link href="/photos">
            <li className="nav-p mt-11 ">FOTOĞRAFLAR</li>
          </Link>
          <Link href="/form">
            <li className="nav-p mt-11 ">FORM</li>
          </Link>
        </ul>

        <div className="flex gap-10 cursor-pointer justify-center mt-24 ml-4">
          <FacebookNegativeIcon />
          <TwitterNegativeIcon />
          <InstagramNegativeIcon />
          <YoutubeNegativeIcon />
        </div>
      </div>
      <span
        onClick={() => setActive(!active)}
        className="absolute right-[30px] cursor-pointer top-[38px] z-20 h-10 w-10 text-white lg:hidden"
      >
        <MenuIcon />
      </span>
    </div>
  );
};

export default Header;
