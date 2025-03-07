import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

// Adicionando textos para os dois idiomas
const projects = [
  {
    title: { pt: "Sistema Juridico", en: "Legal System" },
    link: "https://github.com/GabriGuerra/sistema-juridico",
    description: {
      pt: "Sistema web que conecta advogados, juízes e oficiais de justiça, permitindo criação e execução de processos. Utiliza Java EE e APIs RESTful.",
      en: "Web system that connects lawyers, judges, and court officers, enabling the creation and execution of legal processes. Uses Java EE and RESTful APIs."
    }
  },
  {
    title: { pt: "CWB HousePlants", en: "CWB HousePlants" },
    link: "https://github.com/GabriGuerra/cwbhouseplants-ecommerce",
    description: {
      pt: "E-commerce React.js para amantes de plantas, com funcionalidades como carrinho e checkout. Usa Redux para estado e Bootstrap para responsividade.",
      en: "React.js e-commerce for plant lovers, with features like cart and checkout. Uses Redux for state management and Bootstrap for responsiveness."
    }
  },
  {
    title: { pt: "Travel Recommendation", en: "Travel Recommendation" },
    link: "https://github.com/GabriGuerra/travel-recommendation",
    description: {
      pt: "Aplicativo de recomendação de viagens com JS puro, manipulando DOM dinamicamente e utilizando a Fetch API para dados em tempo real.",
      en: "Travel recommendation app using plain JS, dynamically manipulating the DOM, and using the Fetch API for real-time data."
    }
  },
  {
    title: { pt: "HashTable Wordcount", en: "HashTable Wordcount" },
    link: "https://github.com/GabriGuerra/hash-table-wordcount",
    description: {
      pt: "Aplicativo em C que conta as ocorrências de palavras em arquivos de texto utilizando Hash Table para otimização e organização.",
      en: "C application that counts word occurrences in text files using Hash Table for optimization and organization."
    }
  },
  {
    title: { pt: "Oscar Voting App", en: "Oscar Voting App" },
    link: "https://github.com/GabriGuerra/oscar-voting-app",
    description: {
      pt: "App Android para votação nos filmes do Oscar, com comunicação via API RESTful em Java para validar credenciais e registrar votos.",
      en: "Android app for voting on Oscar movies, with RESTful API communication in Java to validate credentials and register votes."
    }
  },
  {
    title: { pt: "Single Page Portfolio", en: "Single Page Portfolio" },
    link: "https://github.com/GabriGuerra/singlepage-portfolio",
    description: {
      pt: "Portfólio pessoal desenvolvido com HTML, CSS e JavaScript, utilizando o padrão MVC para estruturação e organização do código.",
      en: "Personal portfolio developed with HTML, CSS, and JavaScript, using the MVC pattern for code structure and organization."
    }
  },
  {
    title: { pt: "Sistema de Apoio a Monitoria", en: "Monitoring Support System" },
    link: "https://github.com/GabriGuerra/monitoria",
    description: {
      pt: "Sistema de apoio à monitoria com .NET Core 3.1, MySQL e Node.js. Usando Visual Studio 2019 e NPM para gerenciamento de pacotes.",
      en: "Monitoring support system using .NET Core 3.1, MySQL, and Node.js. Using Visual Studio 2019 and NPM for package management."
    }
  },
  {
    title: { pt: "Concurso de Fotografias", en: "Photography Contest" },
    link: "https://github.com/GabriGuerra/concurso-de-fotografias",
    description: {
      pt: "Sistema de concursos fotográficos personalizados. Usuários podem enviar fotos, votar em concursos e interagir com outras opções de configuração.",
      en: "Customizable photography contest system. Users can submit photos, vote in contests, and interact with other configuration options."
    }
  }
];

function ProjectsSection({ language }) {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevProject = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-4 px-4 flex flex-col w-full">
      {/* Container do projeto */}
      <div className="flex flex-col w-full items-center">
        {/* Botão de seta para cima */}
        <button
          className="p-2 bg-transparent text-gray-600 rounded-full hover:text-teal-400 transition mb-4"
          onClick={prevProject}
        >
          <ChevronUp size={24} />
        </button>

        {/* Card de projeto (com largura de 100% da coluna) */}
        <div className="flex flex-col w-full bg-transparent p-6 border border-gray-600 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-teal-400 flex-grow">
          <h3 className="text-lg font-semibold text-teal-400">
            {projects[index].title[language]}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">
            {projects[index].description[language]}
          </p>
          <a
            href={projects[index].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-sm hover:underline mt-auto"
          >
            {language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
          </a>
        </div>

        {/* Botão de seta para baixo */}
        <button
          className="p-2 bg-transparent text-gray-600 rounded-full hover:text-teal-400 transition mt-4"
          onClick={nextProject}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}

export default ProjectsSection;
