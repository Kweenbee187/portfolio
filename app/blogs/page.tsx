import { client } from "@/sanity/client"
import Link from "next/link"

export const revalidate = 60

export default async function BlogsPage() {
  const blogs = await client.fetch(`
    *[_type == "blog"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      excerpt
    }
  `)

  return (
    <div className="max-w-5xl mx-auto py-24 px-6">
      
      <h1 className="text-6xl font-extrabold mb-12 text-white">
        Blogs
      </h1>

      <div className="space-y-8">
        {blogs.map((blog: any) => (
          <Link
            key={blog._id}
            href={`/blogs/${blog.slug.current}`}
            className="
              block
              p-8  
              rounded-2xl
              bg-white/10 
              backdrop-blur-xl
              border border-white/20
              hover:bg-white/20
              hover:scale-[1.02]
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <h2 className="text-3xl font-semibold mb-2 capitalize">
              {blog.slug.current.replace(/-/g, " ")}
            </h2>

            <p className="text-lg text-gray-200 leading-relaxed">
              {blog.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
