import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Ícones de seta

export default function EducationSection({ language }) {
  // Estado para controlar a visibilidade da descrição
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Textos com estrutura refinada
  const educationText = {
    pt: {
      title: "Educação",
      postGrad: { label: "Pós-graduação", course: "Ciência de Dados", institution: "Universidade Tecnológica Federal do Paraná (UTFPR)", completion: "Conclusão em 12/2026" },
      graduation: { label: "Graduação", course: "Análise e Desenvolvimento de Sistemas", institution: "Universidade Federal do Paraná (UFPR)", completion: "Concluído em 08/2022" },
      highSchool: { label: "Ensino Médio", course: "Colégio Marista - Notre Dame", institution: "Concluído em 12/2012" }
    },
    en: {
      title: "Education",
      postGrad: { label: "Postgraduate", course: "Applied Artificial Intelligence", institution: "Universidade Tecnológica Federal do Paraná (UTFPR)", completion: "Completion in 12/2026" },
      graduation: { label: "Undergraduate", course: "Systems Analysis and Development", institution: "Universidade Federal do Paraná (UFPR)", completion: "Completed in 08/2022" },
      highSchool: { label: "High School", course: "Marista – Notre Dame School", institution: "Completed in 12/2012" }
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
    }, 4700);

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
        {educationText[language].title}
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
          {["postGrad", "graduation", "highSchool"].map((key) => (
            <p key={key} className="text-lg">
              <strong className="text-teal-500 text-xl">{educationText[language][key].label}</strong>
              <br />
              <span className="italic">{educationText[language][key].course}</span>
              <br />
              {key !== "highSchool" ? (
                <>
                  <span className="text-gray-400">{educationText[language][key].institution}</span>
                  <br />
                  <span className="text-gray-400">{educationText[language][key].completion}</span>
                </>
              ) : (
                <span className="text-gray-400">{educationText[language][key].institution}</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}