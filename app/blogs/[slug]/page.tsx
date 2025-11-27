import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

// Pre-generate all routes
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type=="blog"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // NEXT.JS 16 FIX — params is a Promise
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="text-center py-40 text-3xl">
        Invalid blog URL — missing slug.
      </div>
    );
  }

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      content,
      _createdAt
    }`,
    { slug }
  );

  if (!blog) {
    return (
      <div className="text-center py-40 text-3xl">
        404 — Blog Not Found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>
      <div className="prose prose-invert text-lg leading-relaxed">
        <PortableText value={blog.content} />
      </div>
    </div>
  );
}
