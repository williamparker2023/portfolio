import Image from 'next/image';

export default function About() {
  return (
    <section className="space-y-20 animate-fadeIn">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-300 mb-3">About Me</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I am currently a Junior at UIowa where I enjoy playing the piano, learning Japanese, and lifting weights. Aside from that, here are some cool things I&apos;ve been a part of.
        </p>
      </div>

      {/* Experience Header */}
      <div>
        <h2 className="text-4xl font-semibold text-blue-400 mb-6 text-center">Experience</h2>
        <div className="space-y-10">

          {/* John Deere */}
          <div className="bg-gray-900 rounded-xl shadow-lg border border-blue-800 p-8 flex flex-col md:flex-row gap-8 items-start">
            <Image
              src="/images/JD.png"
              alt="John Deere"
              width={100}
              height={100}
              className="rounded-lg shadow-md object-contain"
            />
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-blue-300">John Deere</h3>
              <p className="text-gray-400 text-md italic">Software Engineering Intern · Summer 2025 · Chicago, IL</p>
              <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg space-y-2">
                <li>Building scalable APIs and data tools using Python, Java, and Databricks</li>
                <li>Refactored 100+ files into dynamic, modular systems, improving maintainability</li>
              </ul>
            </div>
          </div>

          {/* MTS */}
          <div className="bg-gray-900 rounded-xl shadow-lg border border-blue-800 p-8 flex flex-col md:flex-row gap-8 items-start">
            <Image
              src="/images/mts.jpg"
              alt="Mobile Track Solutions"
              width={100}
              height={100}
              className="rounded-lg shadow-md object-cover"
            />
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-blue-300">Mobile Track Solutions</h3>
              <p className="text-gray-400 text-md italic">Software Engineering Intern · Summer 2024 · Elkader, IA</p>
              <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg space-y-2">
                <li>Built a Django/PostgreSQL web app to manage and serve company product data</li>
                <li>Added analytics dashboards that increased internal adoption and sales</li>
                <li>Led feature meetings and implemented custom user-requested improvements</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Skills */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-blue-900">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4 text-lg">
          {[
            'Python', 'Java', 'C', 'SQL', 'React.js', 'Flask', 'Django',
            'Docker', 'AWS', 'Git/GitHub', 'Databricks', 'Snowflake'
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-800 text-blue-100 px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
