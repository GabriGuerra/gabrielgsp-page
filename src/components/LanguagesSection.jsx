import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Ícones de seta

export default function LanguagesSection({ language }) {
  // Estado para controlar a visibilidade da descrição
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Definindo os textos com estrutura refinada
  const languagesText = {
    pt: {
      title: "Idiomas",
      french: { label: "Francês", skills: ["Leitura avançada", "Escrita avançada", "Conversação avançada"] },
      english: { label: "Inglês", skills: ["Leitura fluente", "Escrita fluente", "Conversação fluente"] }
    },
    en: {
      title: "Languages",
      french: { label: "French", skills: ["Advanced reading", "Advanced writing", "Advanced speaking"] },
      english: { label: "English", skills: ["Fluent reading", "Fluent writing", "Fluent speaking"] }
    }
  };

  // Alterna estado de expansão
  const toggleExpand = () => {
    setIsClosing(true);
    setIsExpanded(!isExpanded);
  };

  // Expande automaticamente após a montagem inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 4900);

    return () => clearTimeout(timer);
  }, []);

  // Altera cor após o fechamento
  useEffect(() => {
    if (!isExpanded) {
      const timer = setTimeout(() => {
        setIsClosing(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Título com efeito visual */}
      <h2
        className={`text-4xl font-bold relative tracking-tight pb-2 cursor-pointer flex items-center justify-between transition-all duration-300 ease-in-out border-b-2 ${
          isExpanded
            ? "text-teal-400 border-teal-400"
            : isClosing
            ? "text-teal-700 border-teal-600"
            : "text-teal-700 border-teal-700"
        }`}
        onClick={toggleExpand}
      >
        {languagesText[language].title}
        <span
          className={`ml-2 transition-all duration-300 ease-in-out ${
            isExpanded ? "text-teal-400" : isClosing ? "text-teal-700" : "text-teal-700"
          }`}
        >
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </h2>

      {/* Descrição com animação */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="space-y-6 text-gray-400 mt-4">
          {["french", "english"].map((key) => (
            <p key={key} className="text-lg">
              <strong className="text-teal-500 text-xl">
                {languagesText[language][key].label}
              </strong>
              <br />
              {languagesText[language][key].skills.map((skill, index) => (
                <span key={index}>
                  {skill}
                  {index < languagesText[language][key].skills.length - 1 && ", "}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}