import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 pt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-400 uppercase tracking-[6px] mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold leading-tight"
          >
            Hi, I’m Viraj Pakale 👋
          </motion.h1>

          <div className="mt-4 text-3xl md:text-5xl font-bold">
            <TypeAnimation
              sequence={[
                "BTech Student",
                1500,
                "AI Enthusiast",
                1500,
                "Full Stack Learner",
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-300 mt-6 text-lg leading-8 max-w-xl"
          >
            I am currently pursuing a B.Tech degree and have a strong interest
            in Artificial Intelligence and software technologies. I design and
            build structured projects using my knowledge combined with AI-driven tools.
          </motion.p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="#projects">
              <button className="px-6 py-3 bg-pink-500 rounded-lg hover:bg-pink-600 transition">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition">
                Contact Me
              </button>
            </a>

            <a href="/resume.pdf" download>
              <button className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Viraj Pakale"
            className="w-64 md:w-80 h-64 md:h-80 rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/30"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;