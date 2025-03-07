// src/components/EducationSection.jsx
export default function EducationSection({ language }) {
  // Definindo os textos para ambos os idiomas
  const educationText = {
    pt: {
      title: "Educação",
      postGrad: "Pos-graduação – Especialização: Ciência de Dados – Universidade Tecnológica Federal do Paraná (UTFPR), conclusão em 12/2026",
      graduation: "Graduação: Análise e Desenvolvimento de Sistemas – Universidade Federal do Paraná (UFPR), concluído em 08/2022",
      highSchool: "Ensino Médio: Colégio Marista - Notre Dame, concluído em 12/2012"
    },
    en: {
      title: "Education",
      postGrad: "Postgraduate – Specialization: Applied Artificial Intelligence – Universidade Tecnológica Federal do Paraná (UTFPR), completion in 12/2026",
      graduation: "Undergraduate: Systems Analysis and Development – Universidade Federal do Paraná (UFPR), completed in 08/2022",
      highSchool: "High School: Marista – Notre Dame School, completed in 12/2012"
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-teal-400">{educationText[language].title}</h2>
      <p className="text-gray-300"><strong>{educationText[language].postGrad.split(":")[0]}:</strong> {educationText[language].postGrad.split(":")[1]}</p>
      <p className="text-gray-300"><strong>{educationText[language].graduation.split(":")[0]}:</strong> {educationText[language].graduation.split(":")[1]}</p>
      <p className="text-gray-300"><strong>{educationText[language].highSchool.split(":")[0]}:</strong> {educationText[language].highSchool.split(":")[1]}</p>
    </div>
  );
}
