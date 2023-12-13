import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/NEWLOGO.svg';
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-vinho">
      {/* Header para telas grandes (desktop) */}
      <div className="hidden lg:flex justify-center text-center">
        <div className="p-4 flex justify-around font-bold max-w-7xl w-full px-10">
          <Link to="#home"><img src={logo} className='' alt="logo 2FC" /></Link>
          <nav className="flex justify-around w-full items-center">
            <Link to="#home" className='pr-2'>HOME</Link>
            <Link to="#quem-somos" className='pr-2'>SOBRE NÓS</Link>
            <Link to="#solucoes" className='pr-2'>SOLUÇÕES</Link>
            <Link to="#contato">CONTATO</Link>
          </nav>
        </div>
      </div>

      {/* Header para telas pequenas (mobile) */}
      <div className="lg:hidden font-semibold">
        {/* Barra superior */}
        <div className="p-4 flex justify-between items-center">
          <Link to="#home"><img src={logo} className='w-8/12 ml-4 mt-4' alt="logo 2FC" /></Link>
          {/* Ícone de menu para abrir/fechar o menu móvel */}
          <button>
            
             {isMobileMenuOpen ? <IoMdClose onClick={toggleMobileMenu}
            className="text-vinho focus:outline-none lg:hidden w-12 h-12"
          />
             : <IoIosMenu onClick={toggleMobileMenu} className="text-vinho focus:outline-none lg:hidden w-12 h-12"/>
  }
          </button>
        </div>

        {/* Menu móvel (visível apenas em telas pequenas) */}
        {isMobileMenuOpen && (
          <nav className="text-center">
            <Link to="#home" className='block py-2'>HOME</Link>
            <Link to="#quem-somos" className='block py-2'>SOBRE NÓS</Link>
            <Link to="#solucoes" className='block py-2'>SOLUÇÕES</Link>
            <Link to="#contato" className='block py-2'>CONTATO</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
