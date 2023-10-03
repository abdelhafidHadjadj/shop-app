import React from "react";

const ProductDetails = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <h1>{id}</h1>
      <h1>Product title</h1>
    </div>
  );
};

export default ProductDetails;
