import { useContext } from "react";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";
import { ProductContext } from "../context/ProductContext";

function Product() {
  const productCtx = useContext(ProductContext);
  const { count, discount, name, price, list, sumTotal } = productCtx;

  return (
    <div className={styles.container}>
      <Card name={name} count={count} price={price} discount={discount} />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
