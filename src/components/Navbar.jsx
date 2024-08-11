import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full h-[4rem] bg-gray-400">
      <div>
        <h1 className="font-semibold text-4xl">
          Flash<span className="text-red-600">Card</span> Learning Tool
        </h1>
      </div>
      <div>
        <Link to="/admin">
          <h1 className="cursor-pointer">Admin Dashboard</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
