import Image from 'next/image';

export default function Home() {
  return (
    <section className="text-center space-y-10 animate-fadeIn">

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6 mt-10">
        <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
          <Image
            src="/images/willface.png"
            alt="Will Parker"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-blue-300">Hi, I'm Will Parker 👋</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I'm a CS, Physics, and Math student at the University of Iowa. I build clean and scalable software, specializing in ML and full stack development.
        </p>
      </div>

      {/* Quick Summary */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <p className="text-lg text-gray-300">
          Currently interning at <span className="text-blue-400 font-semibold">John Deere</span>, previously at <span className="text-blue-400 font-semibold">Mobile Track Solutions</span>.
          I enjoy working at the intersection of code, data, and design.
        </p>
      </div>
    </section>
  );
}
