import { client } from "@/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function ProjectDetailsPage({ params }: any) {
  const { slug } = params;

  const project = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0]{
      title,
      description,
      details,
      "imageUrl": image.asset->url
    }
  `,
    { slug }
  );

  if (!project) {
    return (
      <div className="text-center py-40 text-3xl">
        <p>404 — Project Not Found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">

      {/* Title */}
      <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

      {/* Image */}
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          width={900}
          height={500}
          alt={project.title}
          className="rounded-2xl shadow-xl mb-10 object-cover"
        />
      )}

      {/* Short Description */}
      <p className="text-xl text-gray-300 mb-6">{project.description}</p>

      {/* Detailed Content */}
      <div className="prose prose-invert text-lg leading-relaxed">
        <PortableText value={project.details} />
      </div>

    </div>
  );
}
