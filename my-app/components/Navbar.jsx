import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center  h-20">
      <div className="w-3/5 h-full flex justify-around items-center font-bold bg-slate-500">
        <Link href="/">
          <h1 className="text-3xl">LOGO</h1>
        </Link>
        <Link href="/addtopic">
          <p className="text-xl px-3 py-4 hover:bg-green-400 hover:text-white bg-white text-black rounded-lg">Add new</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
