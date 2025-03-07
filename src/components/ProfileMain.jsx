import { useState } from 'react';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';  // Ícone do Strava (usando FaRunning)

export default function ProfileMain({ language, toggleLanguage, setShowAbout }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-2/3 space-y-8 md:space-y-0 md:space-x-12">
      <div className="flex flex-col items-center md:items-start w-full md:w-1/3 space-y-6">
        {/* Foto */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
          <img
            src="/gabrielguerra.jpg"
            alt="Gabriel Guerra Samorano Pires"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Botões */}
        <div className="flex flex-col space-y-4 w-full">
          {/* Botão para alternar idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-gray-800 border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <GiWorld className="mr-2" />
            {language === 'pt' ? 'English' : 'Português'}
          </button>

          {/* Botão sobre esta página */}
          <button
            onClick={() => setShowAbout(true)}
            className="bg-gray-800 border border-gray-600 text-gray-300 px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            {language === 'pt' ? 'Sobre esta página' : 'About this page'}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start w-full md:w-2/3">
        <h1 className="text-4xl font-bold text-teal-400">Gabriel Guerra Samorano Pires</h1>
        <p className="text-xl text-gray-300">Software Development & Data Science</p>

        <div className="space-y-2 text-gray-300 mt-6">
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Rua Senador Xavier da Silva, nº 80, São Francisco – Curitiba, PR</p>
          <p className="flex items-center"><FaPhone className="mr-2" /> (41) 98823-4241</p>
          <p className="flex items-center"><FaEnvelope className="mr-2" /> gb.guerra@icloud.com</p>

          {/* Link para o Curriculum Vitae */}
          <p className="flex items-center">
            <FaFilePdf className="mr-2" />
            <a
              href="/cv-gabrielguerra.pdf"
              className="text-gray-300 hover:text-teal-400 transition duration-300"
              download
            >
              Curriculum Vitae
            </a>
          </p>
        </div>

        {/* Links das redes sociais */}
        <div className="flex space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/in/gabgsp/"
            className="text-teal-400 hover:text-teal-500 text-3xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GabriGuerra"
            className="text-teal-400 hover:text-teal-500 text-3xl transition duration-300"
          >
            <FaGithub />
          </a>
          {/* Link para o Strava */}
          <a
            href="https://www.strava.com/athletes/gbguerra"
            className="text-teal-400 hover:text-teal-500 text-3xl transition duration-300"
          >
            <FaRunning />
          </a>
        </div>
      </div>
    </div>
  );
}
