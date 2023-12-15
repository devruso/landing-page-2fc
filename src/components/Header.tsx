import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/NEWLOGO.svg';
import icon from "../assets/personIcon.svg"
import icon2 from "../assets/personIcon2.svg"
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  interface ScrollProps {
    to: string;
  }
  
  function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, { to }: ScrollProps): void {
    event.preventDefault();
  
    const section = document.getElementById(to);
  
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  return (
    <header className="text-vinho">
      {/* Header para telas grandes (desktop) */}
      <div className="hidden lg:flex justify-center text-center">
        <div className="p-4 flex justify-around font-semibold max-w-7xl w-full px-10">
          <Link to="/" className='w-2/3'><img src={logo} className='' alt="logo 2FC" /></Link>
          <nav className="flex justify-around w-full items-center">
            <Link to="/" className='pr-2' >HOME</Link>
            <Link to="/sobre" className='pr-2'>SOBRE NÓS</Link>
            <Link to="#solucoes" onClick={(e:any) => scrollToSection(e, { to: 'solucoes' })} className='pr-2'>SOLUÇÕES</Link>
            <Link to="#contato" onClick={(e:any) => scrollToSection(e, { to: 'contato' })} >CONTATO</Link>
            <div className='flex h-16 -ml-7 justify-center items-center w-2/5'>
              <img src={icon2} alt='icone de pessoa' className='text-pistache' />
              <Link to="https://onvio.com.br"><button className='bg-vinho px-4 h-10 rounded-md ml-3 font-bold text-pistache'>Área do cliente</button> </Link> 
            </div>
          </nav>
        </div>
      </div>

      {/* Header para telas pequenas (mobile) */}
      <div className="lg:hidden font-semibold">
        {/* Barra superior */}
        <div className='flex w-full bg-vinho h-20 justify-center items-center'>
          <img src={icon} alt='icone de pessoa' className='ícone de perfil' />
          <button className='bg-pistache w-3/6 text-xl h-14 rounded-md ml-6 font-bold text-vinho2'><Link to="https://onvio.com.br">Área do cliente</Link></button>   
        </div>
        {/* Logo Mobile */}
        <div className="flex justify-between items-center">
          <Link to="/"><img src={logo} className='w-8/12 ml-4 mt-4 pb-2' alt="logo 2FC" /></Link>
          <button>
            
             {isMobileMenuOpen ? <IoMdClose onClick={toggleMobileMenu}
            className="text-vinho focus:outline-none lg:hidden w-12 h-12"
          />
             : <IoIosMenu onClick={toggleMobileMenu} className="text-vinho focus:outline-none lg:hidden w-12 h-12 mr-2"/>
  }
          </button>
        </div>

        {/* Menu móvel (visível apenas em telas pequenas) */}
        {isMobileMenuOpen && (
          <nav className="text-center">
            <Link to="/" className='block py-2'>HOME</Link>
            <Link to="/sobre" className='block py-2'>SOBRE NÓS</Link>
            <Link to="#solucoes"onClick={(e:any) => scrollToSection(e, { to: 'solucoes' })} className='block py-2'>SOLUÇÕES</Link>
            <Link to="#contato" onClick={(e:any) => scrollToSection(e, { to: 'contato' })} className='block py-2'>CONTATO</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
