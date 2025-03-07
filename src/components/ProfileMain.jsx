import { useState } from 'react';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';  // Ícone do Strava (usando FaRunning)

export default function ProfileMain({ language, toggleLanguage, setShowAbout }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-2/3 space-y-8 md:space-y-0 md:space-x-12 px-6 py-8">
      <div className="flex flex-col items-center md:items-start w-full md:w-1/3 space-y-6">
        {/* Foto */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
          <img
            src="/gabrielguerra.jpg"
            alt="Gabriel Guerra Samorano Pires"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Botões */}
        <div className="flex flex-col space-y-4 w-full mt-4">
          {/* Botão para alternar idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center border border-gray-400 text-gray-400 px-4 py-1 rounded-full shadow-md transition-all duration-300 hover:scale-105 text-gray-500 hover:text-teal-500 hover:shadow-xl hover:border-teal-400 hover:flex-grow"
          >
            <GiWorld className="mr-2" />
            {language === 'pt' ? 'English' : 'Português'}
          </button>

          {/* Botão sobre esta página */}
          <button
            onClick={() => setShowAbout(true)}
            className="flex items-center border border-gray-400 text-gray-400 px-4 py-1 rounded-full shadow-md transition-all duration-300 hover:scale-105 text-gray-500 hover:text-teal-500 hover:shadow-xl hover:border-teal-400 hover:flex-grow"
          >
            {language === 'pt' ? 'Sobre esta página' : 'About this page'}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start w-full md:w-2/3 text-center md:text-left">
      <h1 className="text-4xl font-bold text-teal-400 font-heading tracking-tight mb-4 w-full whitespace-nowrap">
  Gabriel Guerra Samorano Pires
</h1>



        <p className="text-xl text-gray-400 mb-6">Software Development & Data Science</p>

        <div className="space-y-3 text-gray-400 mt-6">
          <p className="flex items-center justify-center md:justify-start text-sm">
            <FaMapMarkerAlt className="mr-2 text-teal-500" />
            Rua Senador Xavier da Silva, nº 80, São Francisco – Curitiba, PR
          </p>
          <p className="flex items-center justify-center md:justify-start text-sm">
            <FaPhone className="mr-2 text-teal-400" />
            (41) 98823-4241
          </p>
          <p className="flex items-center justify-center md:justify-start text-sm">
            <FaEnvelope className="mr-2 text-teal-400" />
            gb.guerra@icloud.com
          </p>

          {/* Link para o Curriculum Vitae */}
          <p className="flex items-center justify-center md:justify-start text-sm">
            <FaFilePdf className="mr-2 text-teal-500" />
            <a
              href="/cv-gabrielguerra.pdf"
              className="text-teal-500 hover:text-teal-600 transition duration-300"
              download
            >
              Curriculum Vitae
            </a>
          </p>
        </div>

        {/* Links das redes sociais */}
        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/gabgsp/"
            className="text-teal-400 hover:text-teal-600 text-3xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GabriGuerra"
            className="text-teal-400 hover:text-teal-600 text-3xl transition duration-300"
          >
            <FaGithub />
          </a>
          {/* Link para o Strava */}
          <a
            href="https://www.strava.com/athletes/gbguerra"
            className="text-teal-400 hover:text-teal-600 text-3xl transition duration-300"
          >
            <FaRunning />
          </a>
        </div>
      </div>
    </div>
  );
}
