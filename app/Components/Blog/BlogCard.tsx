import Link from "next/link"

interface BlogProp {
    blog: any
}

export default function BlogCard({blog}: BlogProp) {
    return (
       <div className="flex flex-col gap-2 dark:bg-gray-800 p-10 rounded-lg">
        <h2><Link 
              className="transition text-gray duration-100 hover:bg-gradient-to-r hover: from-purple-500 hover:to-blue-500 hover:text-transparent hover: bg-clip-text "
              href={`/blog/${blog.fields.slug}`}> {blog.fields.title}</Link>
            </h2>
        <p>{blog.fields.excerpt}</p>
       </div>
    )
}