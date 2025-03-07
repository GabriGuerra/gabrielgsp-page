import React from 'react';

const Header = ({ name, linkedIn, gitHub }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-start px-8 py-8 bg-black bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-800 shadow-xl">
  {/* Container para o nome e subtítulo */}
  <div className="flex flex-col justify-center items-start">
    {/* Nome */}
    <h1 className="text-5xl font-bold text-white tracking-tight transition-all duration-300 hover:scale-105">
      Gabriel Guerra Samorano Pires
    </h1>

    {/* Subtítulo */}
    <p className="text-lg mt-2 text-gray-300 font-light tracking-wide">
      Desenvolvedor de Software
    </p>
  </div>

  {/* Navegação à esquerda (links para seções do CV) */}
  <nav className="ml-16 flex items-center space-x-8">
    <a
      href="#perfil"
      className="text-white text-lg font-semibold tracking-wide transition-all duration-300 hover:text-indigo-400 hover:scale-105"
    >
      Perfil
    </a>
    <a
      href="#formacao"
      className="text-white text-lg font-semibold tracking-wide transition-all duration-300 hover:text-indigo-400 hover:scale-105"
    >
      Formação
    </a>
    <a
      href="#habilidades"
      className="text-white text-lg font-semibold tracking-wide transition-all duration-300 hover:text-indigo-400 hover:scale-105"
    >
      Habilidades
    </a>
    <a
      href="#experiencia"
      className="text-white text-lg font-semibold tracking-wide transition-all duration-300 hover:text-indigo-400 hover:scale-105"
    >
      Experiência
    </a>
    <a
      href="#contato"
      className="text-white text-lg font-semibold tracking-wide transition-all duration-300 hover:text-indigo-400 hover:scale-105"
    >
      Contato
    </a>
  </nav>
</header>

  );
};

export default Header;
