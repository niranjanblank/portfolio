import Image from "next/image"
import Link from "next/link"

interface BlogProp {
    blog: any
}

export default function BlogCard({blog}: BlogProp) {
    return (
        <Link href={`/blog/${blog.slug}`} className="flex flex-col my-2 
        rounded-lg shadow-md
        transition ease-in-out hover:-translate-y-1  hover:scale-101
          bg-white dark:bg-zinc-800
            hover:bg-gray-100 hover:dark:bg-zinc-700 
            border dark:border-transparent
            hover:border hover:dark:border-gray-600
            hover:border-gray-200
        ">
     
        <div className="relative h-72 md:h-50">
          <Image src={`https:${blog.thumbnail.url}`}
            // width={1080}
            // height={720}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="image of blog"
            className="rounded-tl-lg rounded-tr-lg"
            fill={true}
            priority = {true}
            style={{objectFit: 'cover'}}

            />
        </div>
            <div className="px-5 py-5">
                <h2 className="text-3xl font-bold mb-1">
                {blog.title}
                </h2>
                    
                <p className="text-justify dark:text-gray-300">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2 py-2">
                    {blog.tags && (
                        blog.tags.map((tag: string) => (
                        <span className="bg-gray-500 px-2 text-sm text-white rounded-md" key={`${blog.slugtag}-${tag}`}>{tag}</span>
                        )
                        )
                    )}           
                </div>
                <p className="text-sm dark:text-gray-300">{blog.date}</p>
            </div>
    
       </Link>
    )
}