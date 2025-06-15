import Image from 'next/image';

const projects = [
  {
    title: 'Kanji Character Detector',
    description: 'A full-stack web app where users draw a kanji, and a PyTorch CNN trained on 140k+ samples predicts the top 10 characters. Built with Flask, PyTorch, and deployed with Docker.',
    image: '/images/Kanji.png',
  },
  {
    title: 'Monthly Forecasht',
    description: 'A React + TensorFlow LSTM-powered dashboard that forecasts index fund performance and trends. Includes visualizations and backend data pipelines.',
    image: '/images/forecasht.png',
  },
  {
    title: 'Sorting Algorithm Visualizer',
    description: 'A responsive, interactive React application that helps users understand how sorting algorithms work by animating them in real time with user controls.',
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
              priority
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
