import React, { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(API, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

export default useGetProducts;
