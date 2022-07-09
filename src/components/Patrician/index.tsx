import React from 'react';

const PatracianList = [
  {
    id: 1,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 2,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 3,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 4,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 5,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 6,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 7,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  },
  {
    id: 8,
    title: 'Ecoplus',
    image: '/patrocinios/ecoplus.jpg',
  }
]

const Patrician: React.FC = () => {
  return (
    <div className="p-4">
      <h1>Da uma espiadinha nas empresas que estarão presentes...</h1>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {PatracianList.map((patracian) => {
          return (
            <div className="text-center font-bold">
              <img src={patracian.image} className="rounded-sm" />
              <h1>{patracian.title}</h1>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Patrician;