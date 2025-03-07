// src/components/RegionSection.jsx
export default function RegionSection({ language }) {
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

  return (
    <div>
      <h2 className="text-2xl font-semibold text-teal-400">{regionText[language].title}</h2>
      <p className="text-gray-300">
        {regionText[language].description}
      </p>
    </div>
  );
}
