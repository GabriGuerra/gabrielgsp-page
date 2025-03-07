import { motion } from 'framer-motion';

const BackgroundCV = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Gradiente de Fundo Dinâmico */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Partículas em Movimento */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5 + 0.5,
          }}
          animate={{
            x: [null, Math.random() * window.innerWidth],
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Ondas de Luz Suaves */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent via-blue-800 to-transparent opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default BackgroundCV;