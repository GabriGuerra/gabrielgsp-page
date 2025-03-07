import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Usando react-icons para as setas

export default function RegionSection({ language }) {
  // Estado para controlar a visibilidade da descrição
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Estado para controlar quando o texto está fechando

  // Definindo os textos para ambos os idiomas
  const regionText = {
    pt: {
      title: "Região de Trabalho",
      description: "Preferência por Curitiba-PR e região, ou Brasília-DF, mas com grande disponibilidade de horário, deslocamento, viagens ou mudança para qualquer região inclusive para fora do Brasil."
    },
    en: {
      title: "Work Region",
      description: "Preference for Curitiba-PR and region, or Brasília-DF, but with great availability for scheduling, commuting, travel, or relocation to any region, even abroad."
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
    }, 5100); // Simula o tempo de clique após a renderização

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
    <div className="max-w-3xl mx-auto px-6">
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
        {regionText[language].title}
        <span
          className={`ml-2 transition-all duration-300 ease-in-out ${
            isExpanded ? "text-teal-400" : isClosing ? "text-teal-700" : "text-teal-700"
          }`}
        >
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />} {/* Muda a flecha */}
        </span>
      </h2>

      {/* Descrição da região de trabalho com animação suave de rolar para baixo */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isExpanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="space-y-4 text-gray-400 mt-4">
          <p className="text-lg">{regionText[language].description}</p>
        </div>
      </div>
    </div>
  );
}
