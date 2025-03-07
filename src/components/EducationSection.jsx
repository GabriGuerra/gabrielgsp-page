import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Usando react-icons para as setas

export default function EducationSection({ language }) {
  // Estado para controlar a visibilidade da descrição
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Estado para controlar quando o texto está fechando

  // Definindo os textos para ambos os idiomas
  const educationText = {
    pt: {
      title: "Educação",
      postGrad: "Pos-graduação: Ciência de Dados – Universidade Tecnológica Federal do Paraná (UTFPR), conclusão em 12/2026",
      graduation: "Graduação: Análise e Desenvolvimento de Sistemas – Universidade Federal do Paraná (UFPR), concluído em 08/2022",
      highSchool: "Ensino Médio: Colégio Marista - Notre Dame, concluído em 12/2012"
    },
    en: {
      title: "Education",
      postGrad: "Postgraduate: Applied Artificial Intelligence – Universidade Tecnológica Federal do Paraná (UTFPR), completion in 12/2026",
      graduation: "Undergraduate: Systems Analysis and Development – Universidade Federal do Paraná (UFPR), completed in 08/2022",
      highSchool: "High School: Marista – Notre Dame School, completed in 12/2012"
    }
  };

  // Função para alternar o estado de expansão
  const toggleExpand = () => {
    setIsClosing(true); // Marca como fechando
    setIsExpanded(!isExpanded);
  };

  // UseEffect para abrir automaticamente a seção após a montagem inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(true); // Define o estado como "expandido" após a montagem inicial
    }, 4700); // Simula o tempo de clique após a renderização

    return () => clearTimeout(timer); // Limpa o timer caso o componente seja desmontado antes do tempo
  }, []); // O array vazio faz com que o efeito aconteça apenas na primeira renderização

  // UseEffect para alterar a cor da linha e da seta após a animação de fechamento
  useEffect(() => {
    if (!isExpanded) {
      const timer = setTimeout(() => {
        setIsClosing(false); // Permite que a linha e a seta mudem de cor após a animação de fechamento
      }, 500); // A duração do efeito de fechamento (500ms para o fade)
      return () => clearTimeout(timer);
    }
  }, [isExpanded]); // Esse efeito só é disparado quando isExpanded mudar

  return (
    <div className="max-w-3xl mx-auto px-6"> {/* Removendo margem vertical extra */}
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
        {educationText[language].title}
        <span
          className={`ml-2 transition-all duration-300 ease-in-out ${
            isExpanded ? "text-teal-400" : isClosing ? "text-teal-700" : "text-teal-700"
          }`}
        >
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />} {/* Muda a flecha */}
        </span>
      </h2>

      {/* Descrição da educação com animação suave de rolar para baixo */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="space-y-4 text-gray-400 mt-4">
          <p className="text-lg">
            <strong className="text-teal-500">{educationText[language].postGrad.split(":")[0]}:</strong> {educationText[language].postGrad.split(":")[1]}
          </p>
          <p className="text-lg">
            <strong className="text-teal-500">{educationText[language].graduation.split(":")[0]}:</strong> {educationText[language].graduation.split(":")[1]}
          </p>
          <p className="text-lg">
            <strong className="text-teal-500">{educationText[language].highSchool.split(":")[0]}:</strong> {educationText[language].highSchool.split(":")[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
