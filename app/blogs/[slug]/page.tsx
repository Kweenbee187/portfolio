import { client } from "@/sanity/client"
import { PortableText } from "@portabletext/react"

export default async function BlogPost({ params }: any) {
  const { slug } = params

  const blog = await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0]{
      title,
      content,
      _createdAt
    }
  `,
    { slug }
  )

  if (!blog) {
    return <div className="p-10 text-red-400">Blog not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto py-20">
      <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 mb-8">
        {new Date(blog._createdAt).toDateString()}
      </p>

      <div className="prose prose-invert max-w-none">
        <PortableText value={blog.content} />
      </div>
    </div>
  )
}
