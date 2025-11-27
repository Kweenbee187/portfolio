import { client } from "@/sanity/client";

export default async function ResumePage() {
  const resume = await client.fetch(`
    *[_type == "resume" && !(_id in path("drafts.**"))][0]{
      "url": file.asset->url
    }
  `);

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6">Resume</h1>

      {resume?.url ? (
        <>
          <iframe
            src={resume.url}
            className="w-full max-w-4xl h-[80vh] border rounded-xl shadow-xl mb-6"
          />

          <a
            href={resume.url}
            download
            target="_blank"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-purple-700 transition-all"
          >
            Download Resume (PDF)
          </a>
        </>
      ) : (
        <p className="text-gray-300">Resume not uploaded yet.</p>
      )}
    </div>
  );
}
