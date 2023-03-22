import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../componenets/lib/client";
import { useRouter } from "next/router";
import { Product } from "@/componenets";

const TypeOfProduct = ({ products, productType }) => {
  const router = useRouter();
  console.log(products);
  return (
    <div className="product-type-container">
      <h1>All {productType}</h1>
      <div className="products-container">
        {products.map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TypeOfProduct;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { type: "T-Shirts" } },
      { params: { type: "Jackets" } },
      { params: { type: "Sweats" } },
      { params: { type: "Shoes" } },
      { params: { type: "Accessories" } },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { type } }) => {
  const upperCasedFirstLetterType =
    type.charAt(0).toUpperCase() + type.slice(1);
  const productsQuery = `*[_type == 'product' && productType == '${upperCasedFirstLetterType}']`;
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
      productType: upperCasedFirstLetterType,
    },
  };
};
