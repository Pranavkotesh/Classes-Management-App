import { createContext } from "react";
import React from "react";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [quantities, setQuantities] = React.useState({});
  const handleQuantityChange = (product, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: newQuantity,
    }));
  };

  return (
    <ProductContext.Provider value={{ quantities,handleQuantityChange }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
