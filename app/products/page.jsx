import React from "react";
import data from "../dataTest.json";
import ProductCard from "@/components/ProductCard";
const Products = () => {
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div>
      <h1>Product</h1>
      {data.map((el) => (
        <ProductCard
          key={el.id}
          id={el.id}
          title={el.ProductName}
          rating={el.rating}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default Products;
