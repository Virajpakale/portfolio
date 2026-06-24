import { motion } from "framer-motion";

const projects = [
  {
    title: "Hostel Management System",
    description:
      "A full-stack web application for managing hostel operations including student records, room allocation, fees, complaints, and entry/exit tracking.",
    github: "#",
    live: "#"
  },
  {
    title: "Smart Software System for Sugar Cooperatives",
    description:
      "A management software solution developed for sugar cooperatives to streamline member data, production records, and workflow automation.",
    github: "#",
    live: "#"
  },
  {
    title: "Arduino Anti Sleep Alarm",
    description:
      "A hardware-based safety system developed to detect driver drowsiness and trigger alerts to prevent accidents.",
    github: "#",
    live: "#"
  },
  {
    title: "CoreFlow (HealthTech)",
    description:
      "A healthcare-focused platform for appointment booking, medical records management, doctor availability, and AI-powered patient assistance.",
    github: "#",
    live: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          My <span className="text-orange-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-pink-400/20 rounded-2xl p-8 backdrop-blur-lg shadow-lg hover:shadow-pink-500/30"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex gap-4 flex-wrap">
                <a href={project.github} target="_blank">
                  <button className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition">
                    GitHub
                  </button>
                </a>

                <a href={project.live} target="_blank">
                  <button className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition">
                    Live Demo
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;