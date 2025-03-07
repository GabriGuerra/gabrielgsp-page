// src/components/ProfileInfo.jsx

export default function ProfileInfo({ language }) {
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

  return (
    <div>
      <h2 className="text-2xl font-semibold text-teal-400">{profileText[language].title}</h2>
      <p className="text-gray-300">{profileText[language].description}</p>
    </div>
  );
}
