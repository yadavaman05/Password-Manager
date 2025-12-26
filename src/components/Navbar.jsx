import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white w-full">
      <div className="flex items-center justify-between h-14 px-4">
        
        {/* LEFT LOGO */}
        <div className="logo font-bold text-2xl flex items-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </div>

        {/* RIGHT BUTTON */}
        <button className="bg-green-700 rounded-full flex items-center ring-1 ring-white">
          <img
            className="invert w-8 p-1"
            src="/icons/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">GitHub</span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
