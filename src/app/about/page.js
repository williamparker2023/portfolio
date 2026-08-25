import Image from 'next/image';

export default function About() {
  return (
    <section className="space-y-20 animate-fadeIn">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-300 mb-3">About Me</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I am currently a Junior at UIowa where I enjoy playing the piano, learning Japanese, and lifting weights.
          Aside from that, here are some cool things I&apos;ve been a part of.
        </p>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-4xl font-semibold text-blue-400 mb-6 text-center">Experience</h2>
        <div className="space-y-10">

          <div className="bg-gray-900 rounded-xl shadow-lg border border-blue-800 p-8 flex flex-col md:flex-row gap-8 items-start">
            <Image
              src="/images/JD.png"
              alt="John Deere"
              width={100}
              height={100}
              className="rounded-lg shadow-md object-contain"
            />
            <div className="flex-1">
              <h3 className="text-3xl font-bold" style={{ color: '#367C2B' }}>John Deere</h3>
              <p className="text-gray-400 text-md italic">
                Software Engineering Intern · May&nbsp;2026 – Aug&nbsp;2026 · Des Moines, IA
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg space-y-2">
                <li>Designed a serverless AWS pipeline processing 2M+ events daily by integrating EventBridge, SQS, Lambda, and DynamoDB.</li>
                <li>Increased supported data capacity 16×, from 2,900 to 46,000+ records per entity, by redesigning a constrained DynamoDB schema.</li>
                <li>Increased supported artifact size 20×, from 100 MB to 2+ GB, by streaming ZIP archives directly to Amazon S3.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl shadow-lg border border-blue-800 p-8 flex flex-col md:flex-row gap-8 items-start">
            <Image
              src="/images/JD.png"
              alt="John Deere"
              width={100}
              height={100}
              className="rounded-lg shadow-md object-contain"
            />
            <div className="flex-1">
              <h3 className="text-3xl font-bold" style={{ color: '#367C2B' }}>John Deere</h3>
              <p className="text-gray-400 text-md italic">
                Software Engineering Intern · Jun&nbsp;2025 – Aug&nbsp;2025 · Chicago, IL
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg space-y-2">
                <li>Replaced 120+ static JSON files with YAML and Jinja configuration templates, cutting 4,000+ lines of code.</li>
                <li>Reduced Databricks deployment time from 30 minutes to 3 minutes by caching job IDs in Amazon S3.</li>
                <li>Wrote a Python data-integrity script that surfaced 2,000+ record mismatches and documented long-term quality fixes.</li>
                <li>Reduced deployment time 40% by pruning redundant Docker bootups from the CI/CD pipeline.</li>
              </ul>
            </div>
          </div>

          {/* Mobile Track Solutions */}
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
              <p className="text-gray-400 text-md italic">
                Software Engineering Intern · Jun&nbsp;2024 – Aug&nbsp;2024 · Elkader, IA
              </p>
              <ul className="list-disc pl-5 mt-4 text-gray-300 text-lg space-y-2">
                <li>Built a Django/PostgreSQL analytics platform centralizing product spreadsheet data for 25+ employees and 100+ dealers.</li>
                <li>Enabled users to query and analyze thousands of products from one shared platform.</li>
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
            'Python','Java','C','SQL','React.js','Flask','Django',
            'Docker','AWS','Git/GitHub','Databricks','Snowflake'
          ].map(skill => (
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
