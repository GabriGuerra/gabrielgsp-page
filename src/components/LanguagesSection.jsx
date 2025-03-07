// src/components/LanguagesSection.jsx
export default function LanguagesSection({ language }) {
  // Definindo os textos para ambos os idiomas
  const languagesText = {
    pt: {
      title: "Idiomas",
      french: "Francês: Leitura avançada, escrita avançada, conversação avançada",
      english: "Inglês: Leitura fluente, escrita fluente, conversação fluente"
    },
    en: {
      title: "Languages",
      french: "French: Advanced reading, advanced writing, advanced speaking",
      english: "English: Fluent reading, fluent writing, fluent speaking"
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-teal-400">{languagesText[language].title}</h2>
      <p className="text-gray-300">
        <strong>{languagesText[language].french.split(":")[0]}:</strong> {languagesText[language].french.split(":")[1]}
      </p>
      <p className="text-gray-300">
        <strong>{languagesText[language].english.split(":")[0]}:</strong> {languagesText[language].english.split(":")[1]}
      </p>
    </div>
  );
}
