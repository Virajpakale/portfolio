import { motion } from "framer-motion";

const skills = [
  "C",
  "C++",
  "Python",
  "React",
  "Node.js",
  "SQL/MySQL",
  "Git/GitHub",
  "HTML",
  "CSS",
  "JavaScript"
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          My <span className="text-orange-400">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                y: -8
              }}
              whileTap={{
                scale: 0.95
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 border border-pink-400/20 rounded-2xl p-8 text-center backdrop-blur-lg shadow-lg hover:shadow-pink-500/30"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;