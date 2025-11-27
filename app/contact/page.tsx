export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-24 px-6 text-center">
      <h1 className="text-5xl font-bold mb-10">Contact</h1>

      <p className="text-gray-300 text-lg mb-8">
        Feel free to reach out for collaborations, AI ethics work, or research discussions.
      </p>

      <div className="space-y-6 text-xl">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:codedata108@gmail.com"
            className="text-purple-300 underline"
          >
            codedata108@gmail.com
          </a>
        </p>

        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sneha-c-a4715a22a/"
            target="_blank"
            className="text-purple-300 underline"
          >
            Sneha Chakraborty →
          </a>
        </p>
      </div>
    </div>
  );
}
