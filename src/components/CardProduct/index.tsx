import React from 'react';

interface CardProductProps {
  event: {
    title: string;
    price: number;
    description: string;
    key: number;
    url?: string;
    url_meia?: string;
    url_free?: string;
    price_associados?: string;
  };
}

const CardProduct: React.FC<CardProductProps> = ({ event }) => {
  return (
    <div
      key={event.key}
      className='md:h-[200px] h-[170px] hover:shadow-black-200 bg-white flex rounded-lg '
      style={{
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 12%)',
      }}
    >
      {/* <img
        src='/event.jpeg'
        className='md:w-[200px] md:h-[200px] h-[170px] rounded-tl-lg rounded-bl-lg'
        alt=''
      /> */}
      <div className='p-4 w-full flex flex-col items-center justify-between gap-3'>
        <div className='w-full'>
          <div className='flex md:items-start md:justify-between md:flex-row flex-col'>
            <div className='text-[#7D7D7D] font-bold'>{event.title}</div>
            <div className='text-[#7D7D7D]'>R${event.price}</div>
          </div>
          <div className='md:w-[300px] md:h-[100px]'>
            <p className='text-[#B4B4B4] md:flex hidden'>{event.description}</p>
          </div>
          <p className='text-[#B4B4B4] md:hidden w-[160px] truncate'>{event.description}</p>
        </div>
        <div className='w-full flex md:justify-between md:items-center md:flex-row flex-col gap-2'>
          <div className='flex'>
            {event.url && (
              <button
                onClick={() => window.open(event.url)}
                className='text-[rgba(0,0,0,.5)] hover:bg-[#d0cfcf]/80 bg-[rgba(0,0,0,.1)] p-2 pl-3 pr-3 rounded-md'
              >
                Comprar Agora
              </button>
            )}
            {event.url_meia && (
              <button
                onClick={() => window.open(event.url_meia)}
                className='ml-10 text-[rgba(0,0,0,.5)] hover:bg-[#d0cfcf]/80 bg-[rgba(0,0,0,.1)] p-2 pl-3 pr-3 rounded-md'
              >
                Comprar Meia Entrada
              </button>
            )}
            {event.url_free && (
              <button
                onClick={() => window.open(event.url_free)}
                className='text-[rgba(0,0,0,.5)] hover:bg-[#d0cfcf]/80 bg-[rgba(0,0,0,.1)] p-2 pl-3 pr-3 rounded-md'
              >
                Fazer Inscrição Gratuita
              </button>
            )}
            {event.price_associados && (
              <button
                onClick={() => window.open(event.price_associados)}
                className='text-[rgba(0,0,0,.5)] hover:bg-[#d0cfcf]/80 bg-[rgba(0,0,0,.1)] p-2 pl-3 pr-3 rounded-md'
              >
                Comprar Valor Associados
              </button>
            )}
            {/* {event.url_meia && (
              <button
                onClick={() => window.open(event.url)}
                className='ml-10 text-[rgba(0,0,0,.5)] hover:bg-[#d0cfcf]/80 bg-[rgba(0,0,0,.1)] p-2 pl-3 pr-3 rounded-md'
              >
                Comprar Meia Entrada
              </button>
            
              </button
              {event.url_free && (
                <button
                  onClick={() => window.open(event.url)}
                  className='ml-10 text-[rgba(0,0,0,.5)] hover:bg-[#d0cfcf]/80 bg-[rgba(0,0,0,.1)] p-2 pl-3 pr-3 rounded-md'
                >
                  Fazer Inscrição Gratuita
                </button>
            )} */}
          </div>
          <div className='text-[#B4B4B4] text-center md:text-end cursor-pointer hidden md:flex hover:text-black'>
            Compartilhar
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
