import React from 'react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center bg-neutral-900'>
      <div className='p-2 flex items-center justify-between w-full md:w-[1200px]'>
        <a href='/'>
          <img src='logo_expo.png' className='md:w-[80px] w-[50px]' />
        </a>
        <div className='flex items-center justify-between gap-4'>
          <div
            onClick={() => router.push('/')}
            className='hover:cursor-pointer hover:text-white text-slate-100'
          >
            Início
          </div>
          <div
            onClick={() => router.push('/produtos')}
            className='hover:cursor-pointer hover:text-white text-slate-100'
          >
            Produtos
          </div>
          <div
            onClick={() => router.push('/')}
            className='hover:cursor-pointer text-orange-400 hover:text-orange-500'
          >
            Mais informações
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
