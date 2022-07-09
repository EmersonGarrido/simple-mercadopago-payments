import React from 'react';

const CardProduct: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-md text-center flex flex-col gap-3">
      <img src="/products/expo_vip.png" alt="" />
      <h1 className="text-black font-bold">Experiência Completa</h1>
      <a className="text-black">saiba mais</a>
      <button className="text-black">Comprar Agora</button>
    </div>
  );
}

export default CardProduct;