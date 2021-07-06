import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { product, color } = useParams();
  return (
    <div>
      So you want a {color} {product}?
    </div>
  );
};

export default Products;
