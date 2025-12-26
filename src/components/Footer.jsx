import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white w-full">
      <div className="flex flex-col items-center justify-center gap-2 py-4">

        {/* Logo */}
        <div className="font-bold text-lg">
          <span className="text-green-500">&lt;</span>
          Pass<span className="text-green-500">OP/&gt;</span>
        </div>

        {/* Text */}
        <div className="flex items-center text-sm text-slate-300">
          Created with
          <img
            className="w-4 mx-1"
            src="icons/heart.png"
            alt="heart"
          />
          by <span className="ml-1 font-medium text-white">Aman kr. Yadav</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
