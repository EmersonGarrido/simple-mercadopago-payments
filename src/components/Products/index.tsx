import React from 'react';
import CardProduct from '../CardProduct'

const Products: React.FC = () => {
  return (
    <div className='flex justify-center items-center bg-[#EEEEEE]'>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-[1200px]">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
    </div>
  );
}

export default Products;