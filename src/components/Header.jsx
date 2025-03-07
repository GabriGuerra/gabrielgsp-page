import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-teal-400">Meu CV</span>
        </div>
        <nav className="flex space-x-6">
          <Link 
            to="profile" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Perfil`}
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Projetos`}
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Habilidades`}
          </Link>
          <Link 
            to="profile-info" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Informações`}
          </Link>
          <Link 
            to="education" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Educação`}
          </Link>
          <Link 
            to="languages" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Idiomas`}
          </Link>
          <Link 
            to="region" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Região`}
          </Link>
          <Link 
            to="additional-info" 
            smooth={true} 
            duration={500} 
            className="hover:text-teal-400 cursor-pointer"
          >
            {`Info Adicional`}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
