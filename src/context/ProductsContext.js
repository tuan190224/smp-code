import React, { useState, useEffect, createContext } from "react";
import productApi from "../Api/productApi";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getAll();
        //console.log(response);
        setProducts(response);
      } catch (error) {
        console.log("failed to prd");
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
export { ProductsContext, ProductsProvider };
