import React from 'react';
import CardProduct from '../CardProduct'
import axios from 'axios';
import { useRouter } from 'next/router';

const EventList = [
  {
    id: 1,
    title: 'Experiência Completa',
    price: 0,
    description: ``,
    full_description: ``,
    image: '',
    url: '',
  },
  {
    id: 2,
    title: 'Congresso Emprevip',
    price: 0,
    description:
      'O foco é levar de forma diferenciada aos empresários alternativas de melhorias e crescimento em suas empresas e projetos',
    full_description: `O foco do EMPREVIP é levar de forma diferenciada aos empresários alternativas de melhorias e crescimento em suas empresas e projetos.

    Os empresários empreendedores são responsáveis por elevar a inovação e criatividade nos novos mercados. Portanto melhorar as características do bom empreendedor, não desviar dos motivos que te levou a empreender, são de extrema relevância, além de entender a importância do empreendedorismo nas empresas e no mercado.
    
    E aí... Preparado para descobertas e novas experiências no EMPREVIP?`,
    image: '',
    url: '',
  },
  {
    id: 3,
    title: 'Congresso Inspira Make',
    price: 150.0,
    description: 'O conceito de beleza se humanizou e hoje segue menos regras.',
    full_description: `INSPIRA MAKE
    O conceito de beleza se humanizou e hoje segue menos regras e respeita mais a diversidade.
    INSPIRA MAKE não somente vai mostrar os conceitos e tendências, mais irá reforçar a identidade de cada indivíduo, realçando a personalidade e as especificidades que cada um tem.
    As maquiagens são tendências de moda dentro de um amplo universo, externando obras de artes incríveis para cada indivíduo.
    INSPIRA MAKE, você é sua própria inspiração!`,
    image: '',
    url: '',
  },
  {
    id: 4,
    title: 'Congresso Inspira Beauty',
    price: 217.0,
    description: 'Inspira Beauty, Meeting educacional nunca visto , envolvendo conceitos',
    full_description: `Inspira Beauty, Meeting educacional nunca visto , envolvendo conceitos, tendências, cuidados com a haste e gestão .
    Um booster de aprendizado, unindo modernidade, tecnologia no universo de cores e mechas, melhorando seu desenvolvimento no salão. Acha que parou por aqui? Não, ainda contaremos com um super desfile baseados nos conceitos Retros , Clássicos e Futuristas voltados para todos os profissionais Hair Styles do Centro Oeste.`,
    image: '',
    url: '',
  },
  {
    id: 5,
    title: 'Congresso Científico de Estética',
    price: 250.0,
    description:
      'Reunirá profissionais e estudantes no segmento de ESTÉTICA, BELEZA SAÚDE E BEM ESTAR de todo Centro Oeste.',
    full_description: `Reunirá profissionais e estudantes no segmento de ESTÉTICA, BELEZA SAÚDE E BEM ESTAR de todo Centro Oeste com a finalidade de reciclagem de conhecimentos, através de conceitos científicos e inovadores.
    As principais marcas do seguimento de produtos e serviços se farão presentes expondo e apresentando seus lançamentos e tendências mercadológicas. 
    Além de reunir pela primeira vez nomes de  experts do setor da Estética no  Congresso Científico.
    Público alvo: Profissionais e estudantes do setor. Biomédicos, Esteticistas, Farmacêuticos, Fisioterapeutas, Odontologistas, Nutricionistas, Educado físico e enfermeiros.`,
    image: '',
    url: '',
  },
  {
    id: 6,
    title: 'Congresso  Inspira Nails',
    price: 150.0,
    description:
      'Design, inovação, qualidade,  sofisticação e atendimento diferenciado serão os principais pontos abordados no maior encontro de Nails.',
    full_description: `Design, inovação, qualidade,  sofisticação e atendimento diferenciado serão os principais pontos abordados no maior encontro de Nails de todo Centro Oeste.
    Superar as expectativas do cliente, e descobrir quem sou e onde quero chegar para me tornar uma profissional de sucesso, é um quesito de grande valia.
    As unhas tornaram-se um acessório importante para compor o “Look” do dia-a-dia, entender sobre o mercado e suas tendências da moda Nails é a única forma de projetar uma carreira de sucesso.
    INSPIRA NAILS evento exclusivo para Designer de unhas e manicures.`,
    image: '',
    url: '',
  },
  {
    id: 7,
    title: 'Circuito Internacional de Barbearia',
    price: 350.0,
    description:
      'O circuito  de barbearia organizado pela empresária Sibele Rodrigues, CEO da empresa Barber e Negócios nasceu em 2017',
    full_description: `O circuito  de barbearia organizado pela empresária Sibele Rodrigues, CEO da empresa Barber e Negócios nasceu em 2017, focado no crescimento de educação e negócios para profissionais Barbeiros de todo Centro Oeste. 
    A empresa Barber e Negócios investe em experiências e conhecimentos em um dos setores que mais crescem(o mercado masculino)
    Um dos maiores eventos organizado pela empresa Barber e Negócios é o CIRCUITO DE BARBEARIA, evento esse que passaram grandes renomes da Barbearia Internacional e nacional.`,
    image: '',
    url: '',
  },
  {
    id: 8,
    title: 'Congresso Inspira Moda',
    price: 0,
    description:
      'Vai levar para os convidados formas alternadas, uma maneira diferente,quebrando paradigmas ou costume mais predominante.',
    full_description: `Vai levar para os convidados formas alternadas, uma maneira diferente,quebrando paradigmas ou costume mais predominante. Uma variedade de estilos unindo glamour e tendências e formas de se vestir apreciada por variedades de pessoas. Inspira Moda está presente em várias expressões. Venha inspirar no seu Stilo!`,
    image: '',
    url: '',
  },
];

const Products: React.FC = () => {
  const router = useRouter();
  async function handlePaymenyEvent(event: any) {
    const data = await axios({
      method: 'POST',
      url: '/api/payments',
      data: {
        title: event.title,
        price: event.price,
        quantity: 1,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    router.push(`${data.url}`);
  }

  return (
    <div className='flex justify-center items-center bg-[#EEEEEE]'>
      <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-[1200px]'>
        {EventList.map((isEvent: any) => {
          return (
            <CardProduct key={isEvent.id} event={isEvent} handlePaymenyEvent={handlePaymenyEvent} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;