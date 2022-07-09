import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='p-4 flex items-center justify-between'>
      <img src='logo_expo.png' className='w-[80px]' />
      <div className='flex items-center justify-center gap-4'>
        <div
          onClick={() => window.open('/')}
          className='hover:cursor-pointer hover:text-white text-slate-100'
        >
          Início
        </div>
        <div
          onClick={() => window.open('/#produtos')}
          className='hover:cursor-pointer hover:text-white text-slate-100'
        >
          Produtos
        </div>
        <div
          onClick={() => window.open('/')}
          className='hover:cursor-pointer p-2 pl-4 pr-4 bg-[#7f5f00] hover:bg-[#c69500] rounded-md text-white font-bold'
        >
          Mais informações
        </div>
      </div>
    </div>
  );
}

export default Header;