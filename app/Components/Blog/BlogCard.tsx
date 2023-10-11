import Image from "next/image"
import Link from "next/link"

interface BlogProp {
    blog: any
}

export default function BlogCard({blog}: BlogProp) {
    return (
        <Link href={`/blog/${blog.slug}`} className="flex flex-col m-2 dark:bg-gray-800  rounded-lg shadow-lg
        transition ease-in-out hover:-translate-y-1  hover:scale-105
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
                <h2 className="text-3xl font-bold">
                {blog.title}
                    {/* <Link 
                        className="transition text-gray duration-100 hover:bg-gradient-to-r hover: from-purple-500 hover:to-blue-500 hover:text-transparent hover: bg-clip-text "
                        href={`/blog/${blog.slug}`}> {blog.title}</Link> */}
                </h2>
                    
                <p className="text-justify dark:text-gray-300">{blog.excerpt}</p>
                <p className="text-sm dark:text-gray-300 mt-2">{blog.date}</p>
            </div>
    
       </Link>
    )
}