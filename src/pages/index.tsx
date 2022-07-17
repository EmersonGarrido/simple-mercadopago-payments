import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/Header';
import Action from 'components/Action';
import Patrician from 'components/Patrician';
import Footer from 'components/Footer';
import Content from 'components/Content';

// Login com Google
// Cadastro do usuario

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Expo Vip Beleza</title>
        <meta name='description' content='Shopping Bosque dos Ipês, Campo Grande' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {/* Header */}
        <Header />

        {/* Action */}

        <div className='md:flex items-center justify-center p-6 gap-6'>
          <Action />

          <div className='flex items-center justify-center p-2 bg-white rounded-md'>
            <div className='md:hidden'>
              <iframe
                width='350'
                height='200'
                src='https://www.youtube-nocookie.com/embed/28F1GXKfJw0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>
            <div>
              <iframe
                className='hidden md:flex'
                width='520'
                height='300'
                src='https://www.youtube-nocookie.com/embed/28F1GXKfJw0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>
          </div>
        </div>

        <Content />

        <Patrician />

        <Action />

        <Footer />
      </main>
    </div>
  );
};

export default Home;