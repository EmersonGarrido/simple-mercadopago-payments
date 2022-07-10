import React from 'react';

const PatracianList = [
  {
    id: 1,
    title: 'Água Kangen',
    image: '/patrocinios/aguakangen.jpeg',
  },
  {
    id: 2,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 3,
    title: 'Flor da pele',
    image: '/patrocinios/flordapele.jpeg',
  },
  {
    id: 4,
    title: 'C.D Campo Grande',
    image: '/patrocinios/centrodedistribuicao.jpeg',
  },
  {
    id: 5,
    title: 'Primelife',
    image: '/patrocinios/primelife.jpeg',
  },
  {
    id: 6,
    title: 'Intime',
    image: '/patrocinios/intime.jpeg',
  },
  {
    id: 7,
    title: 'Coiffer',
    image: '/patrocinios/coiffer.jpeg',
  },
  {
    id: 8,
    title: 'Barber e Negócios',
    image: '/patrocinios/barbernegocios.jpeg',
  },
  {
    id: 9,
    title: 'Lessa bronze',
    image: '/patrocinios/lessabronze.jpeg',
  },
  {
    id: 10,
    title: 'Viclass',
    image: '/patrocinios/viclass.jpeg',
  },
  {
    id: 11,
    title: 'Lorenzi',
    image: '/patrocinios/lorenzi.jpeg',
  },
  {
    id: 12,
    title: 'Embelleze',
    image: '/patrocinios/embelleze.jpeg',
  },
  {
    id: 13,
    title: 'Velar',
    image: '/patrocinios/velar.jpeg',
  },
  {
    id: 14,
    title: 'Mantoo',
    image: '/patrocinios/mantoo.jpeg',
  },
  {
    id: 15,
    title: 'Espaço laser',
    image: '/patrocinios/espacolaser.jpeg',
  },
  {
    id: 16,
    title: 'Salerm',
    image: '/patrocinios/salerm.jpeg',
  },
  {
    id: 17,
    title: 'Maxlime',
    image: '/patrocinios/maxiline.jpeg',
  },
  {
    id: 18,
    title: 'Cpm 3',
    image: '/patrocinios/cpm3cosmeticos.jpeg',
  },
  {
    id: 19,
    title: 'Kajal',
    image: '/patrocinios/kajal.jpeg',
  },
  {
    id: 20,
    title: `Trendy'Prime`,
    image: '/patrocinios/trendyprime.jpeg',
  },
  {
    id: 21,
    title: 'Nátylla',
    image: '/patrocinios/natylla.jpeg',
  },
  {
    id: 22,
    title: 'Donatti',
    image: '/patrocinios/donatti.jpeg',
  },
  {
    id: 23,
    title: 'Haskell',
    image: '/patrocinios/haskell.jpeg',
  },
  {
    id: 24,
    title: 'Magrass',
    image: '/patrocinios/magrass.jpeg',
  },
  {
    id: 25,
    title: 'Tone Derm',
    image: '/patrocinios/tonederm.jpeg',
  },
  {
    id: 26,
    title: 'Vitória Furkine',
    image: '/patrocinios/vitoriafurkine.jpeg',
  },
  {
    id: 27,
    title: 'PhTop',
    image: '/patrocinios/phtop.jpeg',
  },
  {
    id: 28,
    title: 'Tulípia',
    image: '/patrocinios/tulipia.jpeg',
  },
  {
    id: 29,
    title: 'Bioage',
    image: '/patrocinios/bioage.jpeg',
  },
  {
    id: 30,
    title: 'Tech Place',
    image: '/patrocinios/techplace.jpeg',
  },
  {
    id: 31,
    title: 'Dengos',
    image: '/patrocinios/dengosdemulher.jpeg',
  },
  {
    id: 32,
    title: 'Plenittude',
    image: '/patrocinios/Plenittude.jpeg',
  },
  {
    id: 33,
    title: 'Grandha',
    image: '/patrocinios/grandhatopms.jpeg',
  },
  {
    id: 34,
    title: 'Kione',
    image: '/patrocinios/kione.jpeg',
  },
  {
    id: 35,
    title: 'Las lindas',
    image: '/patrocinios/laslindas.jpeg',
  },
  {
    id: 36,
    title: 'Lá Diva',
    image: '/patrocinios/ladiva.jpeg',
  },
  {
    id: 37,
    title: 'Maui',
    image: '/patrocinios/mauitattoo.jpeg',
  },
  {
    id: 38,
    title: 'Fendi',
    image: '/patrocinios/fendi.jpeg',
  },
  {
    id: 39,
    title: 'Lemon Bijoux',
    image: '/patrocinios/lemon.jpeg',
  },
  {
    id: 40,
    title: 'Medic skin',
    image: '/patrocinios/medicstore.jpeg',
  },
  {
    id: 41,
    title: 'Up!',
    image: '/patrocinios/upescola.jpeg',
  },
  {
    id: 42,
    title: 'Cm Cosméticos',
    image: '/patrocinios/cmcosmeticos.jpeg',
  },
  {
    id: 43,
    title: `L'oréal`,
    image: '/patrocinios/loreal.jpeg',
  },
  {
    id: 44,
    title: 'Kion',
    image: '/patrocinios/kion.jpeg',
  },
  {
    id: 45,
    title: 'Tony',
    image: '/patrocinios/tonyacessorios.jpeg',
  },
  {
    id: 46,
    title: 'Evelin Magalhães',
    image: '/patrocinios/evelinmagalhaes.jpeg',
  },
  {
    id: 47,
    title: 'Divas',
    image: '/patrocinios/divas.jpeg',
  },
  {
    id: 48,
    title: 'Estek',
    image: '/patrocinios/estek.jpeg',
  },
  {
    id: 49,
    title: 'Lowell',
    image: '/patrocinios/lowell.jpeg',
  },
  {
    id: 50,
    title: 'Fihavi',
    image: '/patrocinios/fihavi.jpeg',
  },
];

const Patrician: React.FC = () => {
  return (
    <div className='flex items-center justify-center bg-[#EEEEEE] pt-5 pb-5'>
      <div className='p-4 md:w-[1200px]'>
        <h1 className='text-black text-center'>
          Da uma espiadinha nas empresas que estarão presentes...
        </h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-4'>
          {PatracianList.map((patracian) => {
            return (
              <div
                key={patracian.id}
                style={{
                  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 12%)',
                }}
                className='text-center flex flex-col items-center justify-between hover:shadow-black-200 bg-white p-3 rounded-md'
              >
                <div className='md:w-[250px] md:h-[250px] w-[200px] h-[200px] flex items-center justify-center'>
                  <img src={patracian.image} className='rounded-sm md:w-[200px] w-[150px]' />
                </div>
                <h1 className='text-black'>{patracian.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Patrician;