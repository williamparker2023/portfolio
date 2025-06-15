export default function Contact() {
  return (
    <section className="text-center space-y-6 animate-fadeIn">
      <h1 className="text-5xl font-bold text-blue-300">Get in Touch</h1>
      <p className="text-gray-400 max-w-xl mx-auto">
        Let&apos;s connect — whether you&apos;re interested in collaborating, hiring, or just chatting.
      </p>
      <div className="flex justify-center gap-8 text-blue-400 text-lg">
        <a
          href="https://mail.google.com/mail/?view=cm&to=williamparker2023@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-200 transition"
        >
          Email
        </a>
        <a href="https://github.com/williamparker2023" target="_blank" className="hover:text-blue-200 transition">GitHub</a>
        <a href="https://linkedin.com/in/william-parker25" target="_blank" className="hover:text-blue-200 transition">LinkedIn</a>
      </div>
    </section>
  );
}
