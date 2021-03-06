import React from 'react';
import { useRouter } from 'next/router'


const Action: React.FC = () => {
  const router = useRouter()
  return (
    <div className='text-center mt-10 flex flex-col items-center justify-center gap-5 pt-5 pb-5'>
      <div>
        <h1 className='text-2xl'>
          Seja bem vinda(o) a <b>Expo Vip Beleza</b>
        </h1>
        <p className='font-light text-lg'>De 06 a 09 de Agosto de 2022</p>
        <b className='text-lg'>Shopping Bosque dos Ipês, Campo Grande</b>
      </div>

      <button
        onClick={() => router.push('/ingressos')}
        className='bg-white text-black w-[300px] font-bold p-3 rounded-md'
      >
        COMPRAR INGRESSO
      </button>
      {/* <button
        onClick={() => router.push('/ingressos')}
        className='bg-white text-black w-[300px] font-bold p-3 rounded-md'
      >
        FAZER INSCRIÇÃO
      </button> */}
    </div>
  );
}

export default Action;