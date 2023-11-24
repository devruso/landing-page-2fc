import React from 'react';
import whoWeAre from '../assets/bg-lp-2fc-2.png';
import { FaHandshake } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

const QuemSomos: React.FC = () => {
  return (
    <main id="quem-somos" className="relative py-8 h-[700px]">
      <section className="relative flex items-center justify-center  bg-cover bg-center w-full h-full -z-10" style={{ backgroundImage: `url(${whoWeAre})` }}>
        <div className="max-w-4xl bg-gray-400 px-4  bg-opacity-40 rounded-md mx-auto text-lg text-textColor">
        <h2 className="text-4xl pt-12 font-bold mb-4  ">
          Duas fortes conexões, pensando no futuro da contabilidade que está presente no seu negócio.
        </h2>
        <p className="mb-4 mt-16 leading-relaxed ">
            Fundada por Suzane e Alessandra Fraga Cerqueira, filhas do co-fundador da Nortec Contabilidade, 
            escritório tradicional, reconhecido na BA/NE, situado em Salvador/BA desde a década de 1970.
             Ambas cresceram, coletando vasta experiência de mais de 18 anos na área contábil, 
             hoje, com mais de 18 anos de soluções e entregas assertivas, vivenciando os negócios de centenas de clientes,
              nos mais variados ramos de segmentos da atividade econômica.
          </p>
          <p className="mb-4 leading-relaxed">
            Neste ponto, a 2FC surgiu por acreditar no novo, em novas conexões duradouras, novas ideias e,
             principalmente, na vontade de inovar com responsabilidade, operando de um jeito próprio, 
             servindo "fazer do nosso jeito" um escritório com propostas sob demanda, 
             diferenciadas de serviços e soluções, propondo um novo olhar para a contabilidade.
          </p>
        </div>
      </section>
      <div className="text-center flex justify-center -mt-8 z-10">
        {/* Conteúdo da segunda div */}
        <div className='max-w-sm h-50 mx-4 bg-opacity-95 text-white bg-textColor pt-2 p-2 rounded'>
          <FaHandshake className="text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold  mb-2">PROPOSTA</h3>
          <p className="mb-4 ">
            Facilitar a gestão empresarial do nosso cliente, estreitando laços, propondo soluções e promovendo possibilidades para o crescimento do seu negócio.
          </p>
        </div>
        <div className='flex flex-col bg-textColor text-white bg-opacity-95 max-w-sm p-2 rounded'>
        <FaBalanceScale className="text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold pt-2  ">VALORES</h3>
          <p>
            Ética, transparência e segurança para a excelência dos serviços prestados.
          </p>
        </div>
      </div>
    </main>
  );
};

export default QuemSomos;
