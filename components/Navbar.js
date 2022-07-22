import Link from "next/link";
import { MenuIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from "react";
import {AiOutlineLaptop} from 'react-icons/ai'


const Navbar = () => {

  const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu)


    return (
      <div className="header bg-primary">
        <div className="logo text-gray-50 text-lg"><AiOutlineLaptop className="h-8 w-7 cursor-pointer" /></div>
        <nav className= { menu ? "link-list-toggle absolute w-full md:top-0 md:relative md:flex md:w-auto md:h-full md:align-middle md:transition-none": "link-list absolute w-full md:top-0 md:relative md:flex md:w-auto md:h-full md:align-middle md:transition-none md:justify-center"}>
          <Link href={"/"}>
            <a onClick={toggleMenu} className=" bg-primary nav-link block text-lg py-3 text-center px-4 text-gray-50 hover:bg-secondary hover:text-white">Home</a>
          </Link>
          {/* <Link href={"/contact"}>
            <a onClick={toggleMenu} className=" bg-primary nav-link block text-lg py-3 text-center px-4 text-gray-50 hover:bg-secondary hover:text-white">Contact</a>
          </Link> */}
          <Link href={"/projects"}>
            <a onClick={toggleMenu} className= "bg-primary nav-link block text-lg py-3 text-center px-4 text-gray-50 hover:bg-secondary hover:text-white">Projects</a>
          </Link>
        </nav>
        <MenuIcon id="toggleButton" onClick={toggleMenu} className=" text-stone-50 h-8 w-8 cursor-pointer z-10 md:hidden" />
          
      </div>
    );
}
 
export default Navbar;
