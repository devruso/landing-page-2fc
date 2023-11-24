// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Ativo11.png';
const Header: React.FC = () => {
  return (
    <header className="flex justify-center text-center">
      <div className="p-4 flex justify-around font-bold max-w-7xl w-full px-10"> 
      <Link to="#home"><img src={logo} className='w-4/12' alt="logo 2FC" /></Link>
      <nav className="flex  justify-between w-full  items-center">
          <Link to="#home" className='pr-2'>HOME</Link>
          <Link to="#quem-somos"  className='pr-2'>QUEM SOMOS</Link>
          <Link to="#solucoes"  className='pr-2'>SOLUÇÕES</Link>
          <Link to="#areas-atuacao"  className='pr-2'>ÁREAS DE ATUAÇÃO</Link>
          <Link to="#programas"  className='pr-2'>PROGRAMAS</Link>
          <Link to="#contato">CONTATO</Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
