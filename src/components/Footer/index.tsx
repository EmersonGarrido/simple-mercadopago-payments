import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 gap-4 flex items-center justify-center bg-neutral-900 mt-10">
      <div className="w-[1200px] flex flex-col gap-3 text-center items-center justify-between">
        <div>
        <b><p>Endereço</p></b>
        <p>Av. Cônsul Assaf Trad, 4796 - Parque dos Novos Estados
          Campo Grande, MS, 79035-900, BR
        </p>
        <p><a href="mailto:expovipbelezaoficial@gmail.com">expovipbelezaoficial@gmail.com</a></p>
      </div>
      <div>
        Desenvolvido por <b><a href="https://www.linkedin.com/in/emersongarrido/">Emerson Garrido</a></b>
      </div>
      </div>
    </footer>
  );
}

export default Footer;