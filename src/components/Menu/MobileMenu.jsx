import React from "react";

const MobileMenu = () => {
  return (
    <div
      className={
        open
          ? "opacity-100 scale-100  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      }
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>Logo Mobile</div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
                <TbX />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              <a
                href="#"
                className="ml-3 pb-2 capitalize text-base font-medium border-b border-b-gray-200 text-gray-500 hover:bg-gray-200"
              >
                All
              </a>
              <a
                href="#"
                className="ml-3 pb-2 capitalize text-base font-medium border-b border-b-gray-200 text-gray-500 hover:bg-gray-200"
              >
                Clothes
              </a>
              <a
                href="#"
                className="ml-3 pb-2 capitalize text-base font-medium border-b border-b-gray-200 text-gray-500 hover:bg-gray-200"
              >
                Electronics
              </a>
              <a
                href="#"
                className="ml-3 pb-2 capitalize text-base font-medium border-b border-b-gray-200 text-gray-500 hover:bg-gray-200"
              >
                Furnitures
              </a>
              <a
                href="#"
                className="ml-3 pb-2 capitalize text-base font-medium border-b border-b-gray-200 text-gray-500 hover:bg-gray-200"
              >
                Toys
              </a>
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a
              href="#"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
