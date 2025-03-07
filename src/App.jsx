import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProfileMain from './components/ProfileMain';
import ProfileInfo from './components/ProfileInfo';
import SkillsSection from './components/SkillsSection'; 
import ProjectsSection from './components/ProjectsSection'; 
import LanguagesSection from './components/LanguagesSection';
import RegionSection from './components/RegionSection';
import EducationSection from './components/EducationSection'; 
import AdditionalInfoSection from './components/AdditionalInfoSection';
import BackgroundCV from './components/BackgroundCV';

function App() {
  const [language, setLanguage] = useState('pt');
  const [showAbout, setShowAbout] = useState(false);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col p-4 sm:p-8 min-h-screen relative"
    >
      <BackgroundCV />

      {!showAbout ? (
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
          <div className="flex-1 lg:flex-2 flex flex-col gap-6">
            <section className="p-4 sm:p-6">
              <ProfileMain language={language} toggleLanguage={toggleLanguage} setShowAbout={setShowAbout} />
            </section>
            <section className="p-4 sm:p-6">
              <ProjectsSection language={language} />
            </section>
            <section className="p-4 sm:p-6">
              <SkillsSection language={language} />
            </section>
          </div>

          <div className="flex-1 lg:flex-2 flex flex-col gap-6">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="p-4 sm:p-6"
            >
              <ProfileInfo language={language} />
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="p-4 sm:p-6"
            >
              <EducationSection language={language} />
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="p-4 sm:p-6"
            >
              <LanguagesSection language={language} />
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="p-4 sm:p-6"
            >
              <RegionSection language={language} />
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 1 }}
              className="p-4 sm:p-6"
            >
              <AdditionalInfoSection language={language} />
            </motion.section>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="p-6 bg-transparent text-gray-300 rounded-lg shadow-lg mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <h2 className="text-3xl font-bold text-teal-400 mb-4 text-left">
            {language === 'pt' ? 'Sobre esta página' : 'About this page'}
          </h2>

          <p className="mb-4 text-left">
            {language === 'pt' ? 
              'Esta página é um currículo interativo, desenvolvido com tecnologia moderna e boas práticas de padrões de design. Dispõe as informações do meu currículo em seções, como dados pessoais, habilidades, projetos, formação acadêmica, etc.' :
              'This page is an interactive resume, built using modern technology and good design patterns practice. It disposes the information of my resume in sections, such as personal data, skills, projects, education, etc.'
            }
          </p>
          
          <h3 className="text-xl font-semibold text-teal-400 mb-4 text-left">{language === 'pt' ? 'Principains tecnologias ' : ' Main Technologies Used'}</h3>
          <p className="mb-4 text-left">
            {language === 'pt' ? 
              'As principais tecnologias utilizadas foram React para a construção da interface, Vite para o build do projeto, Tailwind CSS para a estilização responsiva, Framer Motion para as transições de seção e animações, Git para controle de versão e Vercel para deploy.' :
              'The main technologies used were React for building the user interface, Vite for project build, Tailwind CSS for responsive styling, Framer Motion for section transitions and animations, Git for version control and Vercel for deploy.'
            }
          </p>

          <h3 className="text-xl font-semibold text-teal-400 mb-4 text-left">{language === 'pt' ? 'Estrutura e Padrão de Código' : 'Code Structure and Pattern'}</h3>
          <p className="mb-4 text-left">
            {language === 'pt' ? 
              'O código foi organizado em componentes reutilizáveis, cada seção da página é tratada de forma independente. O gerenciamento de estado é feito por meio de React Hooks.' :
              'The code is organized into reusable components, each section of the page is treated independently. State management is done using React Hooks.'
            }
          </p>

          <h3 className="text-xl font-semibold text-teal-400 mb-4 text-left">{language === 'pt' ? 'Funcionalidades' : 'Features'}</h3>
          <ul className="list-disc ml-6 text-left">
            <li>{language === 'pt' ? 'Alternância entre os idiomas Português e Inglês.' : 'Language toggle between Portuguese and English.'}</li>
            <li>{language === 'pt' ? 'Design responsivo para diferentes tamanhos de tela.' : 'Responsive design for different screen sizes.'}</li>
            <li>{language === 'pt' ? 'Cada seção do currículo é um componente independente.' : 'Each resume section is an independent component.'}</li>
            <li>{language === 'pt' ? 'O estado é gerido usando React Hooks.' : 'State is managed using React Hooks.'}</li>
            <li>{language === 'pt' ? 'Componente BackgroundCV gerido separadamente com framer-motion e tailwindCSS 4.' : 'BackgroundCV component managed separately with Framer Motion and TailwindCSS 4.'}</li>
          </ul>
          <br></br>

          <h3 className="text-xl font-semibold text-teal-400 mb-4 text-left">{language === 'pt' ? 'Visão Geral do Código' : 'Code Overview'}</h3>
          <p className="mb-4 text-left">
            {language === 'pt' ? 
              'O código é composto por componentes como ProfileMain, ProfileInfo, SkillsSection, entre outros, que são carregados dinamicamente. O estado da aplicação é controlado através de hooks como useState e useEffect.' :
              'The code consists of components like ProfileMain, ProfileInfo, SkillsSection, among others, which are dynamically loaded. The application state is controlled using hooks like useState and useEffect.'
            }
          </p>

          <button
            onClick={() => setShowAbout(false)}
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            {language === 'pt' ? 'Voltar' : 'Go Back'}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;
