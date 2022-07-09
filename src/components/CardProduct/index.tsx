import React from 'react';

const CardProduct: React.FC = () => {
  return (
    <div className="md:h-[200px] hover:bg-zinc-100/50 hover:shadow-black-200 h-[150px] flex bg-white rounded-lg border-2 border-[#F1F1F1]" style={{
      boxShadow: "0px 3px 1px -2px rgba(0, 0, 0, 0.06), 0px 5px 3px -2px rgba(0, 0, 0, 0.02)"
    }}>
      <img src="/event.jpeg" className="md:w-[200px] md:h-[200px] h-[150px] rounded-tl-lg rounded-bl-lg" alt="" />
      <div className="p-4 w-full flex flex-col items-center justify-between">
        <div className="w-full">
          <div className="text-black font-bold">Experiência Completa</div>
          <p className="text-[#B4B4B4] md:flex hidden">
            Design, inovação, qualidade...
          </p>
          <p className="text-[#B4B4B4] md:hidden">
            Saiba mais
          </p>
        </div>
        <div className="w-full flex md:justify-between md:items-center md:flex-row flex-col">
          <button className="text-black/50 font-bold bg-[#E4E4E4] p-2 pl-3 pr-3 rounded-full">Comprar Agora</button>
          <div className="text-[#B4B4B4] text-center md:text-end">Compartilhar</div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;