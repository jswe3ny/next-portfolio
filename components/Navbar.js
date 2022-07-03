import Link from "next/link";
import { MenuIcon } from '@heroicons/react/solid';
import { useState } from "react";

const Navbar = () => {

  const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu)
    // console.log(menu)
    return (
      <div className="header bg-primary">
        <div className="logo text-gray-50 text-lg">Logo</div>
        <nav  className= { menu ? "link-list-toggle absolute w-full md:top-0 md:relative md:flex md:w-auto md:h-full md:align-middle md:transition-none": "link-list absolute w-full md:top-0 md:relative md:flex md:w-auto md:h-full md:align-middle md:transition-none md:justify-center"}>
          <Link href={"/"}>
            <a className=" bg-primary nav-link block text-lg py-3 text-center px-4 text-gray-50 hover:bg-secondary hover:text-white">Home</a>
          </Link>
          <Link href={"/contact"}>
            <a className=" bg-primary nav-link block text-lg py-3 text-center px-4 text-gray-50 hover:bg-secondary hover:text-white">Contact</a>
          </Link>
          <Link href={"/projects"}>
            <a className= "bg-primary nav-link block text-lg py-3 text-center px-4 text-gray-50 hover:bg-secondary hover:text-white">Projects</a>
          </Link>
        </nav>
        <MenuIcon onClick={toggleMenu} className=" text-stone-50 h-8 w-8 cursor-pointer z-10 md:hidden" />

      </div>
    );
}
 
export default Navbar;
