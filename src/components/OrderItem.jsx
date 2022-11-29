import { TbX } from "react-icons/tb";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="flex my-2 justify-between items-center bg-slate-200 p-1 rounded">
      <figure>
        <img
          className="rounded w-16 h-16 object-cover"
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p className="ml-2 text-sm">{product.title}</p>
      <p className="ml-auto font-bold text-sm">${product.price}</p>
      <TbX className="text-4xl p-2 " 
	  	onClick={(() => removeFromCart(product))}/>
    </div>
  );
};

export default OrderItem;
