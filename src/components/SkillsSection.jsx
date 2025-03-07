import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaJava,
  FaMicrosoft,
  FaDocker,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiOracle } from "react-icons/si";
import { DiSpark } from "react-icons/di";

export default function SkillsSection() {
  const technologies = [
    { icon: IoLogoJavascript, color: "text-yellow-500", name: "JavaScript" },
    { icon: FaReact, color: "text-cyan-400", name: "React" },
    { icon: FaJava, color: "text-red-600", name: "Java" },
    { icon: FaMicrosoft, color: "text-blue-500", name: "C#" },
    { icon: FaMicrosoft, color: "text-blue-500", name: ".NET" },
    { icon: FaDocker, color: "text-blue-400", name: "Docker" },
    { icon: FaBootstrap, color: "text-indigo-600", name: "Bootstrap" },
    { icon: SiTailwindcss, color: "text-teal-500", name: "Tailwind" },
    { icon: SiMysql, color: "text-blue-500", name: "MySQL" },
    { icon: SiPostgresql, color: "text-blue-400", name: "PostgreSQL" },
    { icon: SiOracle, color: "text-orange-500", name: "Oracle DB" },
    { icon: DiSpark, color: "text-orange-500", name: "Spark" },
  ];

  return (
    <div className="p-6 flex justify-center">
      <div className="flex justify-center items-center gap-4 flex-wrap max-w-4xl">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group relative"
            initial={{ opacity: 0, rotate: -90, y: -30, scale: 0.8 }}
            animate={{
              opacity: 1,
              rotate: 0,
              y: 0,
              scale: 1,
              transition: {
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 10,
              },
            }}
          >
            <motion.div
              className={`${tech.color} text-5xl group-hover:text-teal-400 transition-all`}
              whileHover={{
                scale: 1.2,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              <tech.icon />
            </motion.div>
            <motion.span
              className="text-sm mt-2 text-gray-300 transition-all opacity-100 group-hover:opacity-0"
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
