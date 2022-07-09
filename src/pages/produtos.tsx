import React from 'react';
import Head from 'next/head';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Products from 'components/Products'

const Produtos: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Expo Vip Beleza</title>
        <meta name='description' content='Shopping Bosque dos Ipês, Campo Grande' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default Produtos;