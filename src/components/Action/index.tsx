import React from 'react';

const Action: React.FC = () => {
  return (
    <div className='w-full text-center mt-10 flex flex-col items-center justify-center gap-5'>
      <div>
        <h1 className='text-2xl'>
          Seja bem vinda(o) a <b>Expo Vip Beleza</b>
        </h1>
        <p className='font-light text-lg'>De 06 a 09 de Agosto de 2022</p>
        <b className='text-lg'>Shopping Bosque dos Ipês, Campo Grande</b>
      </div>

      <button className='bg-orange-400 font-bold hover:bg-orange-500 p-3 rounded-full w-[300px]'>
        COMPRAR INGRESSO
      </button>
    </div>
  );
}

export default Action;