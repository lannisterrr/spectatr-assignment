"use client";
import { useState } from "react";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // <nav className="bg-blue-600 p-4">
    //   <div className="container mx-auto flex  justify-center md:justify-between items-center">
    //     <div className="   text-white text-2xl font-bold">User List App</div>
    //     <div className="hidden md:block">
    //       <a href="#" className="text-white mx-2 text-xl  font-bold">
    //         Home
    //       </a>
    //       <a href="#" className="text-white mx-2  text-xl  font-bold">
    //         About
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    <nav className="bg-blue-600 py-4 px-2">
      <div className="container mx-auto flex justify-between items-center  relative ">
        <div className="text-white text-2xl font-bold">User List App</div>
        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <img src="/menu.svg" className="w-10" />
          </button>
        </div>
        <div className="hidden sm:block">
          <a href="#" className="text-white mx-2 text-xl  font-bold">
            Home
          </a>
          <a href="#" className="text-white mx-2  text-xl  font-bold">
            About
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className=" sm:hidden  flex flex-col items-center justify-evenly absolute top-[80px] bg-blue-600 z-[999] left-0 w-full  h-[150px]">
          <a
            href="#"
            className="block text-white mx-2 text-xl font-bold md:inline-block"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white mx-2 text-xl font-bold md:inline-block"
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
