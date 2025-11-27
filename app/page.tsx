export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* Name */}
      <h1 className="text-5xl font-bold mb-4">
        Sneha Chakraborty
      </h1>

      {/* Role */}
      <p className="text-xl text-purple-300 mb-4">
        AI Ethicist • Responsible AI Advocate • ML Researcher
      </p>

      {/* Interests */}
      <p className="text-lg text-purple-200 max-w-2xl leading-relaxed">
        NLP • Generative Model Safety • Graph Neural Networks • 
        Multimodal Systems • Trustworthy AI  • BlockChain
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-10">
        <a
          href="/resume"
          className="bg-purple-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-purple-700 transition-all"
        >
          View Resume
        </a>

        <a
          href="/contact"
          className="border border-white text-white px-8 py-3 rounded-xl text-lg hover:bg-white hover:text-black transition-all"
        >
          Contact
        </a>
      </div>

    </main>
  );
}
