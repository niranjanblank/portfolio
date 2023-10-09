import BlogCard from "../Components/Blog/BlogCard";
import { client } from "../lib/contentful";

async function getBlogPosts() {
    const response = await client.getEntries({
        content_type: 'blogPost'
    })

    return response.items
}

export async function BlogList() {
    const blogData = await getBlogPosts()
    return (
        <>
             {
            blogData.map(blog => (
                <BlogCard blog={blog} key={blog.sys.id} />
            ))
            
            }
        </>

    )
}