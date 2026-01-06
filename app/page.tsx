import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/profile.jpg"
              alt="Tong Phuong"
              width={160}
              height={160}
              className="rounded-full w-full h-full object-cover border-4 border-blue-600 dark:border-blue-400 shadow-lg"
              priority
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Tong Phuong</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          English Teacher | Writer | AI Ops Developer
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
            I'm an English teacher and writer with 5 years of experience teaching children
            ages 6-15. My approach goes beyond grammar and vocabulary—I teach English through
            essential soft skills like presentation, storytelling, debate, and negotiation.
            I believe that <strong>"Learning should feel like playing,"</strong> and I design
            every lesson to spark curiosity and joy.
          </p>
          <p>
            As an AI ops developer, I'm on a mission to help educators embrace AI as a powerful
            teaching tool, not something to fear. I build AI-powered systems that connect various
            AI applications to streamline tasks like lesson planning, content creation, and student
            engagement—empowering teachers to focus on what they do best: inspiring students.
          </p>
          <p>
            Whether I'm crafting a compelling story for young learners or automating workflows
            with AI, my goal is the same: make education more effective, engaging, and accessible
            for everyone.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Teaching & Training",
            "Storytelling",
            "Presentation Skills",
            "Debate & Negotiation",
            "AI Ops Development",
            "Prompt Engineering",
            "Workflow Automation",
            "Content Creation",
            "Curriculum Design",
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
        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">English Teacher & Soft Skills Coach</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              2020 - Present • 5 Years Experience
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Teaching English to children ages 6-15 through engaging soft skills development.
              Specializing in presentation, storytelling, debate, and negotiation techniques
              that make language learning fun and practical. Philosophy: "Learning should feel like playing."
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">AI Ops Developer for Education</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              2023 - Present
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Building AI-powered systems that connect multiple AI applications to automate
              teaching workflows. Creating tools for lesson planning, content generation, and
              student engagement tracking—helping educators embrace AI technology confidently.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Writer & Content Creator</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Ongoing
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Creating educational content, teaching materials, and storytelling resources
              for young learners. Writing about the intersection of education, technology,
              and AI to help teachers adapt to the future of learning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
