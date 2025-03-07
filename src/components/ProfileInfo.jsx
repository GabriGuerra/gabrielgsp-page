import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Usando react-icons para as setas

export default function ProfileInfo({ language }) {
  // Estado para controlar a visibilidade da descrição
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Estado para controlar quando o texto está fechando

  // Definindo os textos para ambos os idiomas
  const profileText = {
    pt: {
      title: "Perfil Profissional",
      description:
        "Formado em Análise e Desenvolvimento de Sistemas pela Universidade Federal do Paraná (UFPR), com forte base em desenvolvimento de software. Possui conhecimento em Java, Java EE, JavaScript, C# e .NET, incluindo seus principais frameworks. Familiaridade com metodologias ágeis, especialmente SCRUM, além de conhecimento em arquitetura MVC e desenvolvimento de APIs RESTful. Domínio de bancos de dados relacionais, MySQL, Oracle DB e PostgreSQL, e experiência acadêmica com NoSQL, Spark e Python. Fluente em Inglês e Francês. Atualmente cursa Ciência de Dados na Universidade Tecnológica Federal do Paraná (UTFPR), aprofundando seu interesse pela área."
    },
    en: {
      title: "Professional Profile",
      description:
        "Graduated in Systems Analysis and Development from the Universidade Federal do Paraná (UFPR), with a strong foundation in software development. Knowledgeable in Java, Java EE, JavaScript, C#, and .NET, including their main frameworks. Familiar with agile methodologies, especially SCRUM, as well as knowledge in MVC architecture and RESTful API development. Proficient in relational databases, MySQL, Oracle DB, and PostgreSQL, with academic experience in NoSQL, Spark, and Python. Fluent in English and French. Currently pursuing Data Science at Universidade Tecnológica Federal do Paraná (UTFPR), deepening interest in the field."
    }
  };

  // Função para alternar o estado de expansão
  const toggleExpand = () => {
    setIsClosing(true); // Marca como fechando
    setIsExpanded(!isExpanded);
  };

  // UseEffect para abrir automaticamente a seção na primeira renderização
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true); // Define o estado como "expandido" após a montagem inicial
    }, 4500); // Simula o tempo de clique após a renderização

    return () => clearTimeout(timer); // Limpa o timer caso o componente seja desmontado antes do tempo
  }, []); // O array vazio faz com que o efeito aconteça apenas na primeira renderização

  // Quando a animação de fechamento terminar, podemos mudar a cor da linha
  useEffect(() => {
    if (!isExpanded) {
      const timer = setTimeout(() => {
        setIsClosing(false); // Permite que a linha e a seta mudem de cor após a animação de fechamento
      }, 500); // A duração do efeito de fechamento (500ms para o fade)
      return () => clearTimeout(timer);
    }
  }, [isExpanded]); // Esse efeito só é disparado quando isExpanded mudar

  return (
    <div className="max-w-3xl mx-auto px-6 py-6 space-y-0">
      {/* Título com efeito de underline e flecha */}
      <h2
        className={`text-4xl font-bold relative tracking-tight pb-2 cursor-pointer flex items-center justify-between transition-all duration-300 ease-in-out border-b-2 ${
          isExpanded
            ? "text-teal-400 border-teal-400"
            : isClosing
            ? "text-teal-700 border-teal-600"
            : "text-teal-700 border-teal-700"
        }`}
        onClick={toggleExpand} // Ativa a expansão ao clicar
      >
        {profileText[language].title}
        <span
          className={`ml-2 transition-all duration-300 ease-in-out ${
            isExpanded ? "text-teal-400" : isClosing ? "text-teal-700" : "text-teal-700"
          }`}
        >
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />} {/* Muda a flecha */}
        </span>
      </h2>

      {/* Descrição do perfil com animação suave de rolar para baixo */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="space-y-4 text-gray-400 mt-4">
          <p className="text-lg">{profileText[language].description}</p>
        </div>
      </div>
    </div>
  );
}
