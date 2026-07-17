
import { useState } from "react"
import { Link } from "react-router"
import main_logo from "/images/main_logo.svg"



function Navbar() {

    

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white py-3 [box-shadow:#3c40434d_0_1px_2px,_#3c404326_0_2px_6px_2px]">
  <div className="container mx-auto flex items-center justify-between">
    {/* Logo */}
    <Link to="/">
      <img className="h-14" src={main_logo} alt="Logo" />
    </Link>

    {/* Navigation Links */}
    <div className="flex items-center gap-8">
      <Link
        to="/"
        className="text-gray-800 font-medium hover:text-purple-600 transition-colors duration-300"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="text-gray-800 font-medium hover:text-purple-600 transition-colors duration-300"
      >
        About
      </Link>
    </div>
  </div>
</nav>
    )
}

export default Navbar