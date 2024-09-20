import { createContext, useReducer } from "react";
import { initialProductState, productReducer } from "../reducer/productReducer";

// Step 1: Create a context object
export const ProductContext = createContext();
// Step 2: Set up a Context Provider
export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialProductState);
  const { count, discount, name, price, list, sumTotal, quantity } = state;

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };

  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };

  const handlerChangeName = (value) => {
    // action = {type:"ACTION_NAME", payload: "value"}
    dispatch({ type: "SET_NAME", payload: value });
    // setName(value);
  };
  const handlerChangePrice = (value) => {
    dispatch({ type: "CHANGE_PRICE", payload: value });
  };
  const handlerAddProduct = (value) => {
    dispatch({ type: "ADD_PRODUCT", payload: value });
  };
  const contextValue = {
    count,
    discount,
    name,
    price,
    list,
    sumTotal,
    quantity,
    handlerPlus,
    handlerMinus,
    handlerChangeName,
    handlerChangePrice,
    handlerAddProduct,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
