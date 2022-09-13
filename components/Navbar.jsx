import React, { useState } from 'react';
import Link from 'next/Link';
import { AiOutlineClose } from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
//AiOutLineClose

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [ logo, setLogo ] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    };

    //flex w-full space-x-10 justify-items-center items-center justify-center h-20 px-4 absolute z-10 text-black

    return (
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black bg-gray-100/90">
        {/* normal menu */}
        <div>
          <h1 className={logo ? 'hidden' : 'block'}>Tshirt</h1>
        </div>
        <ul className="hidden md:flex space-x-10">
          <li ><Link href="/">Home</Link></li>
          <li ><Link href="/tshirts">T-Shirts</Link></li>
          <li ><Link href="/future-projects">Future Projects</Link></li>
          <li ><Link href="/contact">Contacts</Link></li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>
        {/* mobile menu */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <div>
            <ul>
              <h1>Menu</h1>
              <li className="border-b"><Link href="/">Home</Link></li>
              <li className="border-b"><Link href="/tshirts">T-Shirts</Link></li>
              <li className="border-b"><Link href="/future-projects">Future Projects</Link></li>
              <li className="border-b"><Link href="/contact">Contacts</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
}
 
export default Navbar;