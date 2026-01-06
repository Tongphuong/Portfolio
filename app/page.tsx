import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Developer | Creator | Problem Solver
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            I'm a passionate developer with a love for creating elegant solutions
            to complex problems. My journey in software development started when
            I wrote my first line of code, and I haven't looked back since.
          </p>
          <p>
            I specialize in building modern web applications using cutting-edge
            technologies like React, Next.js, and TypeScript. I believe in writing
            clean, maintainable code and creating user experiences that delight.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing what I've learned
            through blog posts and tutorials.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "Git",
            "HTML/CSS",
            "REST APIs",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Senior Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Tech Company • 2022 - Present
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Leading development of modern web applications using React and Next.js.
              Mentoring junior developers and establishing best practices for the team.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Startup Inc • 2020 - 2022
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Built and maintained multiple client projects from conception to deployment.
              Worked with cross-functional teams to deliver high-quality products.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Junior Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Web Agency • 2018 - 2020
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Developed responsive websites and web applications for various clients.
              Collaborated with designers to implement pixel-perfect designs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
