
import BlogCard from "../Components/Blog/BlogCard";
import { client } from "../lib/contentful";
import { Asset, BlogPost } from "./interfaces";
import { Document } from '@contentful/rich-text-types';


async function getBlogPosts(): Promise<BlogPost[]> {
    const response = await client.getEntries({
        content_type: 'blogPost'
    })

    const blogposts: BlogPost[] = response.items.map(item => {
        const thumbnail = item.fields.thumbnail as Asset;

        return {
            title: item.fields.title as string,
            slug: item.fields.slug as string,
            thumbnail: {
                url: thumbnail.fields.file.url,
                width: thumbnail.fields.file.details.image.width,
                height: thumbnail.fields.file.details.image.height
            },
            excerpt: item.fields.excerpt as string,
            content: item.fields.content as Document
        }

    })

    return blogposts
}


export async function BlogList() {
    const blogData = await getBlogPosts()
    console.log(JSON.stringify(blogData[0].thumbnail,null, 4))
    return (
        <div className="mt-5">
             {
            blogData.map(blog => (
                <BlogCard blog={blog} key={blog.slug} />
            ))
            
            }
        </div>

    )
}