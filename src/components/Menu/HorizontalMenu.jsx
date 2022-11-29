import React from "react";

const HorizontalMenu = () => {
  return (
    <nav className="hidden md:flex space-x-10">
      <div className="relative">
        <a
          href="#"
          className="ml-3 capitalize text-base font-medium text-gray-500 hover:text-gray-900"
        >
          All
        </a>
        <a
          href="#"
          className="ml-3 capitalize text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Clothes
        </a>
        <a
          href="#"
          className="ml-3 capitalize text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Electronics
        </a>
        <a
          href="#"
          className="ml-3 capitalize text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Furnitures
        </a>
        <a
          href="#"
          className="ml-3 capitalize text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Toys
        </a>
      </div>
    </nav>
  );
};

export default HorizontalMenu;
