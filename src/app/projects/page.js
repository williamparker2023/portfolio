import Image from 'next/image';

const projects = [
  {
    title: 'FizzBuzz Social Network',
    description:
      'A full-stack Next.js + Supabase social platform for tech discussions. Features GitHub OAuth, infinite scroll, image uploads (≤5 MB) and CI/CD on Vercel. 120+ users and 100+ visitors.',
    image: '/images/fb.PNG', // add this image to /public/images
  },
  {
    title: 'Kanji Character Detector',
    description:
      'Users draw a kanji; a PyTorch CNN (trained on 140 k samples) predicts the top 10 characters. Flask backend, Canvas API frontend, Docker-deployable.',
    image: '/images/Kanji.png',
  },
  {
    title: 'Monthly Forecasht',
    description:
      'React + TensorFlow LSTM dashboard forecasting index-fund trends with interactive visualizations and automated data pipelines.',
    image: '/images/forecasht.png',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    description:
      'Interactive React app that animates sorting algorithms in real time, helping users understand algorithmic behavior.',
    image: '/images/algovispic.png',
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
            <h2 className="text-3xl font-bold text-blue-300">{proj.title}</h2>
            <p className="text-gray-300 text-lg mt-4">{proj.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
