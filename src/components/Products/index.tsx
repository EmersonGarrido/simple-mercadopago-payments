import React from 'react';
import CardProduct from '../CardProduct'

const Products: React.FC = () => {
  return (
    <div className="p-5 grid grid-cols-2 gap-2">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  );
}

export default Products;