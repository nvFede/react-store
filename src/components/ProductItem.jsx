import React, { useContext } from "react";
import ProductList from "../containers/ProductList";
import { TbShoppingCartPlus } from "react-icons/tb";
import AppContext from "../context/AppContext";

const ProductItem = ({ product }) => {

const {addToCart} = useContext(AppContext)

const handleClick = item => {
	console.log(item)
	addToCart(item)
}

  return (
    <div className={`rounded-lg overflow-hidden shadow ${product.id < 3 ? 'lg:col-span-2' : ''}`}>
      <img src={product.images[0]} alt={product.title} className='object-cover w-full' />
      <div className=" bg-slate-100 flex justify-between ">
        <div className="py-3 px-2">
          <p className="font-bold">${product.price}</p>
          <p className="text-gray-500 text-sm">{product.title}</p>
        </div>
        
          <TbShoppingCartPlus 
		  onClick={() => handleClick(product)}
		  className="m-2 text-4xl rounded-full border cursor-pointer border-gray-500 p-1 self-center
		 	hover:bg-slate-800 hover:text-white active:bg-slate-600 active:text-white
		  " />
        
      </div>
    </div>
  );
};

export default ProductItem;
