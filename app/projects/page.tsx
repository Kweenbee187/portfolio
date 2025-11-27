import { client } from "@/sanity/client"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 60

export default async function ProjectsPage() {
  const projects = await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      description,
      image
    }
  `)

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project: any) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug.current}`}
            className="block bg-white/10 border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]"
          >
            {project.image && (
              <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={project.image.asset.url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
