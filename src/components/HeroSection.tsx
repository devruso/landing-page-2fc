import React from 'react';
import whoWeAre from '../assets/HeroImage.png';
import whoWeAre2 from "../assets/HeroImgMobile.png";
import { FaHandshake } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <main id="hero" className="relative ">
      {/* Imagem de fundo para telas maiores */}
      <section className="hidden md:flex justify-end md:flex-row bg-cover bg-center w-full h-[700px] -z-10" style={{ backgroundImage: `url(${whoWeAre})` }}>
        <h2 className="text-6xl text-left mb-4 text-vinho2 w-1/3 md:mt-24 md:mr-24">
      Duas fortes <b> conexões </b> pensando na contabilidade do <b> seu negócio </b></h2> 
      </section>

      {/* Imagem de fundo alternativa para telas menores */}
      <section className="md:hidden bg-cover bg-center w-full h-[528px] -z-10" style={{ backgroundImage: `url(${whoWeAre2})` }}>
        <div className="text-5xl pt-24  md:pt-6 text-left mb-2 text-vinho2 px-4">
          Duas fortes <b> conexões </b> pensando na contabilidade do <b> seu negócio </b>
        </div>
      </section>

      <div className="text-center flex justify-center -mt-8  z-10 flex-col md:flex-row">
        {/* Conteúdo da primeira div */}
        <div className='max-w-sm flex flex-col h-80 md:h-96 mx-4 mb-4 md:mb-0 bg-opacity-95 shadow-xl text-vinho2 bg-pistache pt-2 p-2 rounded'>
          <FaHandshake className="text-5xl mx-auto mb-4" />
          <h3 className="text-4xl font-semibold mb-2">Proposta</h3>
          <p className="my-auto text-xl w-4/5 mx-auto text-vinho">
            Facilitar a gestão empresarial do nosso cliente, estreitando laços, propondo soluções e promovendo possibilidades para o crescimento do seu negócio.
          </p>
        </div>

        {/* Conteúdo da segunda div */}
        <div className='max-w-sm flex flex-col mx-4 h-80 md:h-96 bg-opacity-95 shadow-xl text-vinho2 bg-pistache pt-2 p-2 rounded'>
          <FaBalanceScale className="text-5xl mx-auto mb-4" />
          <h3 className="text-4xl font-semibold  mb-2">Valores</h3>
          <p className='text-xl my-auto w-4/5 mx-auto pb-20 text-vinho'>
            Ética, transparência e segurança para a excelência dos serviços prestados.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
