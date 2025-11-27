import { client } from "@/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Pre-generate all project slugs
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type=="project"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // NEXT.JS 16 FIX — unwrap params
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="text-center py-40 text-3xl">
        <p>Invalid project URL — missing slug.</p>
      </div>
    );
  }

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

      {/* Description */}
      {project.description && (
        <p className="text-xl text-gray-300 mb-6">{project.description}</p>
      )}

      {/* Detailed Content */}
      {project.details ? (
        <div className="prose prose-invert text-lg leading-relaxed">
          <PortableText value={project.details} />
        </div>
      ) : (
        <p className="text-gray-400 text-lg">
          No additional details available.
        </p>
      )}
    </div>
  );
}
