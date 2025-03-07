// src/components/AdditionalInfoSection.jsx
export default function AdditionalInfoSection({ language }) {
  // Definindo os textos para ambos os idiomas
  const additionalInfoText = {
    pt: {
      title: "Informações Complementares",
      description: `Atualmente desenvolvendo projetos com tecnologias modernas e próximo da conclusão do curso de Full-Stack Developer pela IBM.
                    Profissional proativo, organizado e sociável, tanto no ambiente de trabalho quanto fora dele.
                    Corredor de rua, busca levar uma vida equilibrada, com foco na saúde e no bem-estar.
                    Rotina sempre voltada para aprendizado contínuo, tem como principais hobbies atividade física, estudo de novos idiomas e tecnologias.`
    },
    en: {
      title: "Additional Information",
      description: `Currently developing projects with modern technologies and close to completing the Full-Stack Developer course by IBM.
                    Proactive, organized, and sociable professional, both in the workplace and outside of it.
                    Street runner, seeking to live a balanced life, focusing on health and well-being.
                    Passionate about continuous learning, with main hobbies being the study of new languages and technologies.`
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-teal-400">{additionalInfoText[language].title}</h2>
      <p className="text-gray-300">
        {additionalInfoText[language].description}
      </p>
    </div>
  );
}
