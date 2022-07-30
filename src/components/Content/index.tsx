import React from 'react';
import { useRouter } from 'next/router';

interface ContentProps {
  id: number;
  title: string;
  content: string;
  image: string;
}

const contents: ContentProps[] = [
  {
    id: 1,
    title: 'Inspira Make',
    content: `
    O conceito de beleza se humanizou e hoje segue menos regras e respeita mais a diversidade. Inspira Make não somente vai mostrar os conceitos e tendências, mais irá reforçar a identidade de cada indivíduo, realçando a personalidade e as especificidades que cada um tem. As maquiagens são tendências de moda dentro de um amplo universo, externando obras de artes incríveis para cada indivíduo. INSPIRA MAKE, você é sua própria inspiração!
    `,
    image: '/content/inspira-make-novo.jpeg',
  },
  {
    id: 2,
    title: 'Inspira Beauty',
    content: `
    Meeting educacional nunca visto, envolvendo conceitos, tendências, cuidados com a haste e gestão. Um booster de aprendizado, unindo modernidade, tecnologia no universo de cores e mechas, melhorando seu desenvolvimento no salão.
    Acha que parou por aqui? Não, ainda contaremos com um super desfile baseados nos conceitos Retros, Clássicos e Futuristas voltados para todos os profissionais Hair Styles do Centro Oeste.
    `,
    image: '/content/inspira-beauty.jpeg',
  },
  {
    id: 3,
    title: 'Congresso Científico de Estética',
    content: `
    Reunirá profissionais e estudantes no segmento de estética, beleza, saúde e bem estar de todo Centro Oeste com a finalidade de reciclagem de conhecimentos, através de conceitos científicos e inovadores. As principais marcas do seguimento de produtos e serviços estarão presentes expondo e apresentando seus lançamentos e tendências mercadológicas. Além de reunir pela primeira vez nomes de experts do setor da Estética no Congresso Científico.
    Público alvo: Profissionais e estudantes do setor. Biomédicos, Esteticistas, Farmacêuticos, Fisioterapeutas, Odontologistas, Nutricionistas, Educado físico e enfermeiros.
    `,
    image: '/content/cong-cient-novo.jpeg',
  },
  {
    id: 4,
    title: 'Inspira Nails',
    content: `
    Design, inovação, qualidade, sofisticação e atendimento diferenciado serão os principais pontos abordados no maior encontro de Nails de todo Centro Oeste. Superar as expectativas do cliente, e descobrir quem sou e onde quero chegar para me tornar uma profissional de sucesso, é um quesito de grande valia. As unhas tornaram-se um acessório importante para compor o “Look” do dia-a-dia, entender sobre o mercado e suas tendências da moda Nails é a única forma de projetar uma carreira de sucesso. Inspira Nails evento exclusivo para Designer de unhas e manicures.`,
    image: '/content/inspira-nail.jpeg',
  },
  {
    id: 5,
    title: 'Circuito Internacional de Barbearia',
    content: `
    O 4• Encontro de Barbeiros, organizado pela empresa Barber e Negócios se tornou hoje um dos principais eventos de Barbearia do Centro Oeste.
    Esse ano dentro da Expo Vip além desse grande Congresso teremos a batalha dos Barbeiros, vindo com o prêmio mais importante nacional o Tesoura de Ouro.
    Além de expositores do seguimento, teremos um ambiente de convivência para troca de ideias entre os profissionais. Você Barbeiro não pode fica de fora desse envento transformador.`,
    image: '/content/barber.jpeg',
  },
  /*{
    id: 6,
    title: 'Inspira Moda',
    content: `
    Vai levar para os convidados formas alternadas, uma maneira diferente,quebrando paradigmas ou costume mais predominante. Uma variedade de estilos unindo glamour e tendências e formas de se vestir apreciada por variedades de pessoas. Inspira Moda está presente em várias expressões. Venha inspirar no seu Stilo!`,
    image: '/content/moda.jpeg',
  },*/
  {
    id: 7,
    title: 'Empodera-se',
    content: `
    A consciência coletiva, será um dos principais temas abordados nesse mega eventos. Todas(os) que são empreendedoras(es), serão bem vindos nesse grande encontro.

    Palestras aliadas às ações para fortalecer as mulheres e homens e desenvolver a equidade de gênero. Teremos convidados especiais falando do mercado e formas de crescimentos consolidados.

    Empoderar-se é o ato de tomar poder sobre si.
    `,
    image: '/content/empodera-se.jpeg',
  },
];

const Content: React.FC = () => {
  const router = useRouter();
  return (
    <div className='bg-[#EEEEEE] mt-4 p-3 flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:w-[1200px]'>
        {contents.map((isContent: ContentProps) => {
          return (
            <div
              key={isContent.id}
              className='bg-white text-[#B4B4B4] p-3 rounded-md flex flex-col items-center justify-center border-b-2'
            >
              <img src={isContent.image} className='md:w-[200px] rounded-md' />
              <div className='flex flex-col gap-3 p-3'>
                <h1 className='font-bold'>{isContent.title}</h1>
                <p>{isContent.content}</p>
              </div>
              <button
                onClick={() => router.push('/ingressos')}
                className='h-[40px] text-[rgba(0,0,0,.5)] hover:bg-[#d0cfcf]/80 bg-[rgba(0,0,0,.1)] p-2 pl-3 pr-3 rounded-md'
              >
                Ver ingressos
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
