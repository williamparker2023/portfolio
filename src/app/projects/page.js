import Image from 'next/image';

const projects = [
  {
    title: 'Parallel Electrostatics Simulation Engine',
    description:
      'A real-time C++/SFML electrostatics engine supporting 5,000+ interacting particles. Replaced O(n²) all-pairs force calculations with an O(n log n) Barnes–Hut quad-tree and multi-threading, reducing a 200-step benchmark from 7.63 s to 0.75 s (10.2× speedup).',
    link: 'https://github.com/williamparker2023/ElectroSim',
    image: '/images/EMPicture.png',
  },
  {
    title: 'Kanji Sketch Recognizer',
    description:
      'A PyTorch CNN trained on 140K 64×64 Kanji images across 3,832 classes, achieving 93% top-10 accuracy. A Flask backend and Canvas API frontend serve the top 10 predicted characters with English meanings in under 200 ms.',
    link: 'https://github.com/williamparker2023/KanjiPytorch',
    image: '/images/Kanji.png',
  },
  {
    title: 'FizzBuzz Social Network',
    description:
      'A full-stack Next.js and Supabase social platform for tech discussions with GitHub OAuth, infinite scroll, image uploads, and CI/CD on Vercel. Reached 120+ users and 100+ visitors.',
    image: '/images/fb.PNG',
  },
];

export default function Projects() {
  return (
    <section className="space-y-16 animate-fadeIn">
      <h1 className="text-5xl font-bold text-center text-blue-300">Projects</h1>

      {projects.map((proj, i) => (
        <div
          key={i}
          className="bg-gray-900 rounded-xl shadow-lg border border-blue-800 p-8 flex flex-col md:flex-row gap-8 items-start"
        >
          <div className="w-full md:w-1/2 h-[250px] relative rounded-lg overflow-hidden shadow">
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-300">
              {proj.link ? (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition">
                  {proj.title}
                </a>
              ) : proj.title}
            </h2>
            <p className="text-gray-300 text-lg mt-4">{proj.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
