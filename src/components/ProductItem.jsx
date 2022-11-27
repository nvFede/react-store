import React from "react";
import ProductList from "../containers/ProductList";
import { TbShoppingCartPlus } from "react-icons/tb";

const ProductItem = ({ product }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow">
      <img src={product.images[0]} alt={product.title} />
      <div className=" bg-slate-100 flex justify-between ">
        <div className="py-3 px-2">
          <p className="font-bold">${product.price}</p>
          <p className="text-gray-500 text-sm">{product.title}</p>
        </div>
        
          <TbShoppingCartPlus 
		  className="m-2 text-4xl rounded-full border cursor-pointer border-gray-500 p-1 self-center" />
        
      </div>
    </div>
  );
};

export default ProductItem;
