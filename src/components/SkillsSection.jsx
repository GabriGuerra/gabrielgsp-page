import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaDocker,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiPython,
  SiMongodb,
  SiNumpy,
  SiPandas,
  //SiMatplotlib,
  //SiMicrosoftexcel,
} from "react-icons/si";
import { DiSpark } from "react-icons/di";

export default function SkillsSection() {
  const technologies = [
    { icon: IoLogoJavascript, color: "text-yellow-500", name: "JavaScript" },
    { icon: SiPython, color: "text-blue-300", name: "Python" },
    { icon: SiMysql, color: "text-blue-500", name: "MySQL" },
    { icon: SiPostgresql, color: "text-blue-400", name: "PostgreSQL" },
    { icon: SiOracle, color: "text-red-600", name: "Oracle DB" },
    { icon: FaReact, color: "text-cyan-400", name: "React" },
    { icon: FaBootstrap, color: "text-indigo-600", name: "Bootstrap" },
    { icon: SiTailwindcss, color: "text-teal-500", name: "Tailwind" },
    //{ icon: FaDocker, color: "text-blue-400", name: "Docker" }, 
    { icon: DiSpark, color: "text-orange-500", name: "Spark" },
    { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { icon: SiNumpy, color: "text-orange-400", name: "NumPy" },
    { icon: SiPandas, color: "text-red-500", name: "Pandas" },
    //{ icon: SiMatplotlib, color: "text-blue-700", name: "Matplotlib" },
    //{ icon: SiMicrosoftexcel, color: "text-green-400", name: "Excel" },
    
  ];

  return (
    <div className="p-6 flex justify-center">
      <div className="flex justify-center items-center gap-4 flex-wrap max-w-4xl">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group relative cursor-pointer"
            initial={{ opacity: 0, rotate: -90, y: -30, scale: 0.8 }}
            animate={{
              opacity: 1,
              rotate: 0,
              y: 0,
              scale: 1,
              transition: {
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 10,
              },
            }}
            whileHover={{
              scale: 1.2,
              rotate: -5,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
          >
            <motion.div className={`${tech.color} text-5xl transition-all`}>
              <tech.icon />
            </motion.div>
            <motion.div className={`text-sm mt-2 ${tech.color} transition-all`}>
              {tech.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}