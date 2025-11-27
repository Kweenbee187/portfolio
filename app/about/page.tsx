import { client } from "@/sanity/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
  const data = await client.fetch(`
    *[_type == "about"][0]{
      name,
      role,
      bio,
      "profileUrl": profileImage.asset->url
    }
  `);

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 flex flex-col items-center">

      {/* Name */}
      <h1 className="text-5xl font-bold mb-4 text-center">{data?.name}</h1>

      {/* Role */}
      <p className="text-xl text-purple-300 mb-6 text-center">{data?.role}</p>

      {/* Profile Image */}
      {data?.profileUrl && (
        <Image
          src={data.profileUrl}
          width={240}
          height={240}
          className="rounded-full mb-8 shadow-xl object-cover"
          alt="Profile photo"
        />
      )}

      {/* Bio (PortableText renderer) */}
      <div className="prose prose-invert text-lg leading-relaxed max-w-3xl">
        <PortableText value={data?.bio} />
      </div>

    </div>
  );
}
