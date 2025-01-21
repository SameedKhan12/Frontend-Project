import React from "react";
import MenuIcon from "./icon/ManuIcon.astro";
import Close from "./icon/Close.astro";
const Menu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div onClick={()=>setOpen(!open)} className="menuIcon cursor-pointer">
        <MenuIcon className="mx-6 w-8 h-8" />
      </div>
      <div
        id="menu"
        className={`absolute top-0 ${open?"left-0":"-left-[600px]"} duration-1000 transition-all lg:hidden flex flex-col items-start justify-between gap-5 bg-white w-1/2 pl-10 pt-6 pb-9 pr-6 rounded-br-xl z-30`}
      >
        <div onClick={()=>setOpen(!open)} className="w-full flex justify-end">
          <Close className="text-royal-blue close cursor-pointer" />
        </div>
        <ul className="flex flex-col gap-6">
          <li className="cursor-pointer hover:text-royal-blue uppercase">
            <a href="/">HOME</a>
          </li>
          <li className="cursor-pointer hover:text-royal-blue uppercase">
            <a href="/">About</a>
          </li>
          <li className="cursor-pointer hover:text-royal-blue uppercase">
            <a href="/">Feature</a>
          </li>
          <li className="cursor-pointer hover:text-royal-blue uppercase">
            <a href="/">screenshot</a>
          </li>
          <li className="cursor-pointer hover:text-royal-blue uppercase">
            <a href="/blogs">blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
