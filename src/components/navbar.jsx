
import { useState } from "react";
import { Link } from "react-router-dom";
import main_logo from "/images/main_logo.svg";



function Navbar() {

    

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white py-3 [box-shadow:#3c40434d_0_1px_2px,_#3c404326_0_2px_6px_2px]">
  <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

    <Link to="/">
      <img className="h-10 lg:h-14" src={main_logo} alt="Logo" />
    </Link>


    <div className="flex items-center gap-8">
      <Link
        to="/"
        className="font-medium text-black"
      >
        Home
      </Link>

      <Link
        to="/about-us"
        className="font-medium text-black"
      >
        About
      </Link>
    </div>
  </div>
</nav>
    )
}

export default Navbar