import React from 'react';
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
  return (
    <div className='p-4 flex items-center justify-between'>
      <img src='logo_expo.png' className='w-[80px]' />
      <div className='flex items-center justify-center gap-4'>
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
          className='hover:cursor-pointer p-2 pl-4 pr-4 bg-[#7f5f00] hover:bg-[#c69500] rounded-md text-white font-bold'
        >
          Mais informações
        </div>
      </div>
    </div>
  );
}

export default Header;