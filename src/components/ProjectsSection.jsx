import { ChevronUp, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// Lista fixa de projetos desejados (com títulos, links e nomes dos repositórios)
const projects = [
  {
    title: { pt: "Sistema Jurídico", en: "Legal System" },
    link: "https://github.com/GabriGuerra/sistema-juridico",
    repo: "sistema-juridico",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  },
  {
    title: { pt: "CWB HousePlants", en: "CWB HousePlants" },
    link: "https://github.com/GabriGuerra/cwbhouseplants-ecommerce",
    repo: "cwbhouseplants-ecommerce",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  },
  {
    title: { pt: "Travel Recommendation", en: "Travel Recommendation" },
    link: "https://github.com/GabriGuerra/travel-recommendation",
    repo: "travel-recommendation",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  },
  {
    title: { pt: "HashTable Wordcount", en: "HashTable Wordcount" },
    link: "https://github.com/GabriGuerra/hash-table-wordcount",
    repo: "hash-table-wordcount",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  },
  {
    title: { pt: "Oscar Voting App", en: "Oscar Voting App" },
    link: "https://github.com/GabriGuerra/oscar-voting-app",
    repo: "oscar-voting-app",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  },
  {
    title: { pt: "Single Page Portfolio", en: "Single Page Portfolio" },
    link: "https://github.com/GabriGuerra/singlepage-portfolio",
    repo: "singlepage-portfolio",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  },
  {
    title: { pt: "Sistema de Apoio a Monitoria", en: "Monitoring Support System" },
    link: "https://github.com/GabriGuerra/monitoria",
    repo: "monitoria",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  },
  {
    title: { pt: "Concurso de Fotografias", en: "Photography Contest" },
    link: "https://github.com/GabriGuerra/concurso-de-fotografias",
    repo: "concurso-de-fotografias",
    description: { pt: "Carregando descrição...", en: "Loading description..." }
  }
];

function ProjectsSection({ language }) {
  const [projectList, setProjectList] = useState(projects);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchProjectDescriptions() {
      try {
        const response = await fetch("https://api.github.com/users/GabriGuerra/repos");
        const data = await response.json();

        const updatedProjects = projectList.map(proj => {
          const repoData = data.find(repo => repo.name === proj.repo);
          return {
            ...proj,
            description: {
              pt: repoData?.description || "Descrição não disponível.",
              en: repoData?.description || "Description not available."
            }
          };
        });

        setProjectList(updatedProjects);
      } catch (error) {
        console.error("Erro ao buscar descrições do GitHub:", error);
      }
    }

    fetchProjectDescriptions();
  }, []);

  const nextProject = () => {
    if (index < projectList.length - 1) {
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
      <div className="flex flex-col w-full items-center">
        <button
          className="p-2 bg-transparent text-gray-600 rounded-full hover:text-teal-400 transition mb-4"
          onClick={prevProject}
          disabled={index === 0}
        >
          <ChevronUp size={24} />
        </button>

        <div className="flex flex-col w-full bg-transparent p-6 border border-gray-600 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-teal-400">
          <h3 className="text-lg font-semibold text-teal-400">
            {projectList[index].title[language]}
          </h3>
          <p className="text-sm text-gray-400">{projectList[index].description[language]}</p>
          <a
            href={projectList[index].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 text-sm hover:underline mt-auto"
          >
            {language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
          </a>
        </div>

        <button
          className="p-2 bg-transparent text-gray-600 rounded-full hover:text-teal-400 transition mt-4"
          onClick={nextProject}
          disabled={index === projectList.length - 1}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}

export default ProjectsSection;
