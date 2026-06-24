import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-8">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact <span className="text-orange-400">Me</span>
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">

          {/* Email */}
          <a
            href="mailto:virajpakale2006@gmail.com"
            className="p-4 bg-white/10 rounded-full hover:bg-pink-500 transition text-2xl"
          >
            <FaEnvelope />
          </a>

          {/* Phone */}
          <a
            href="tel:8010344991"
            className="p-4 bg-white/10 rounded-full hover:bg-pink-500 transition text-2xl"
          >
            <FaPhone />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Virajpakale"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-pink-500 transition text-2xl"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/viraj-pakale-2513a9225"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 rounded-full hover:bg-pink-500 transition text-2xl"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;