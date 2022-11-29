import React, { useContext, useState } from "react";
import Menu from "./Menu";
import { TbShoppingCart, TbMenu2, TbX } from "react-icons/tb";
import AppContext from "../context/AppContext";
import HorizontalMenu from "./Menu/HorizontalMenu";
import MobileMenu from "./Menu/MobileMenu";
import MyOrder from "../containers/MyOrder";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <>
      {/* <Menu /> */}
      <div className="fixed bg-white w-full border-b-2 border-gray-100 shadow-sm">
        <div className=" px-10 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                Logo
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="text-xl pointer"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <TbMenu2 /> {/* Mobile Menu icon */}
              </button>
            </div>
            <HorizontalMenu />
            <div className="flex items-center justify-end md:flex-1 lg:w-0 cursor">
              <div className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 dropdown-toggle hidden-arrow flex items-center">
                <TbShoppingCart className="text-2xl" onClick={(() => setToggleCart(!toggleCart))} />
                {cart.length > 0 ? (
                  <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-1.5 ml-3  px-1.5">
                    {cart.length}
                  </span>
                ) : null}
              </div>
              { toggleCart && <MyOrder />}
              
            </div>
          </div>
        </div>


        
      </div>
    </>
  );
};

export default Header;
