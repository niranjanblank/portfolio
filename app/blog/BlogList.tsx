
import BlogCard from "../Components/Blog/BlogCard";
import { client } from "../lib/contentful";
import { Asset, BlogPost } from "./interfaces";
import { Document } from '@contentful/rich-text-types';
import { format, parseISO } from 'date-fns';

async function getBlogPosts(): Promise<BlogPost[]> {
    const response = await client.getEntries({
        content_type: 'blogPost',
        order: ["-fields.datePosted"]
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
            date: format(parseISO(item.fields.datePosted as string), 'MMM dd, yyyy') as string,
            content: item.fields.content as Document,
            tags: item.fields.tags as string[] | null,
            githubLink: item.fields.githubLink as string | null
        }

    })

    return blogposts
}


export async function BlogList() {
    const blogData = await getBlogPosts()
    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                blogData.map(blog => (
                    <BlogCard blog={blog} key={blog.slug} />
                ))
                }
            </div>
    )
}