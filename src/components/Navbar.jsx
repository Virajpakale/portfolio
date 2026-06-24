import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Viraj<span className="text-orange-400">.</span>
        </h1>

        {/* Links */}
        <ul className="flex gap-4 md:gap-8 uppercase text-xs md:text-sm tracking-wide md:tracking-widest">
          <li>
            <a href="#about" className="hover:text-pink-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-pink-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-pink-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </motion.nav>
  );
}

export default Navbar;