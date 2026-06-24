function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-orange-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            I am currently pursuing my B.Tech at TKIET and continuously learning
            AI and modern software technologies to create impactful solutions for
            real-world challenges.
          </p>
        </div>

        <div className="bg-white/10 border border-pink-400/20 p-8 rounded-2xl backdrop-blur-lg">
          <h3 className="text-2xl font-semibold mb-6">Education</h3>

          <div className="space-y-4 text-gray-300">
            <p>🎓 College: TKIET</p>
            <p>📘 Degree: BTech</p>
            <p>📍 Current Year: 3rd Year</p>
            <p>📅 Graduation: 2028</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;