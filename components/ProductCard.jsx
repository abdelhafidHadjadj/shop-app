import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ id, imgUrl, title, price, rating }) => {
  return (
    <Link key={id} href={`products/${id}`}>
      <Image src={imgUrl} alt={title} />
      <div>
        <h1>{title}</h1>
        <span>{rating}</span>
        <span>{price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
