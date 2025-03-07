import React from 'react';

const Hero = ({
  profile, 
  education, 
  technologies, 
  languages, 
  workRegion, 
  additionalInfo
}) => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Canvas para animação de partículas (igual ao anterior) */}
      <canvas className="absolute top-0 left-0 w-full h-full z-0"></canvas>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto p-6 mt-32">
        {/* Perfil Profissional */}
        <div className="text-center mb-12 fadeInUp">
          <h2 className="text-5xl font-extrabold mb-4 opacity-90 drop-shadow-xl">Perfil Profissional</h2>
          <p className="text-lg">{profile}</p>
        </div>

        {/* Formação Acadêmica */}
        <div className="mb-12 fadeInUp">
          <h2 className="text-4xl font-semibold mb-4">Formação Acadêmica</h2>
          <ul className="list-none space-y-6">
            {education.map((item, index) => (
              <li key={index} className="flex items-center space-x-4">
                <span className="text-xl font-semibold text-purple-400">{item.degree}</span>
                <span className="text-lg">{item.institution} ({item.year})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Principais Tecnologias */}
        <div className="mb-12 fadeInUp">
          <h2 className="text-4xl font-semibold mb-4">Principais Tecnologias</h2>
          <ul className="flex flex-wrap gap-6">
            {technologies.map((tech, index) => (
              <li key={index} className="bg-purple-800 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-purple-700">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Idiomas */}
        <div className="mb-12 fadeInUp">
          <h2 className="text-4xl font-semibold mb-4">Idiomas</h2>
          <ul className="list-none">
            {languages.map((lang, index) => (
              <li key={index}>
                <strong>{lang.language}:</strong> {lang.level}
              </li>
            ))}
          </ul>
        </div>

        {/* Região de Trabalho */}
        <div className="mb-12 fadeInUp">
          <h2 className="text-4xl font-semibold mb-4">Região de Trabalho</h2>
          <p className="text-lg">{workRegion}</p>
        </div>

        {/* Informações Complementares */}
        <div className="mb-12 fadeInUp">
          <h2 className="text-4xl font-semibold mb-4">Informações Complementares</h2>
          <p className="text-lg">{additionalInfo}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
