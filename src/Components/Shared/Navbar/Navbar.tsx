import Image from "next/image";
import React from "react";
import logo from "../../../Media Asset/Logo.png";
const Navbar = () => {
  return (
    <nav className='bg-transparent'>
      <div className='container flex items-center justify-center p-6 mx-auto'>
        <Image src={logo} alt='Pokemon' className='w-36 md:w-42' />
      </div>
    </nav>
  );
};

export default Navbar;
