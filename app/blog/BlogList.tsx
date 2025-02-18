import Link from "next/link";
import BlogCard from "../Components/Blog/BlogCard";
import { client } from "../lib/contentful";
import { Asset, BlogPost, BlogPostList } from "./interfaces";
import { Document } from '@contentful/rich-text-types';
import { format, parseISO } from 'date-fns';
import Trigger from "./Trigger";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";


async function getBlogPosts(page:number = 1, limit: number = 10): Promise<BlogPostList> {
    const response = await client.getEntries({
        content_type: 'blogPost',
        order: ["-fields.datePosted"],
        skip: (page-1)*limit,
        limit: limit
    })


    const blogposts: BlogPostList = {total: response.total,
        blogs: response.items.map(item => {
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

    })}

    return blogposts
}


export async function BlogList({page, limit}: {page:number, limit: number})
 {


    const blogData = await getBlogPosts(page, limit)
    return (
        <div className="flex flex-col">
        <div className="flex gap-2">
        {(page*limit)<blogData.total && (
            <Link href={`/blog?page=${page+1}&limit=${limit}`} className="flex items-center hover:bg-gray-200 dark:bg-zinc-800 dark:text-white p-2 px-4 rounded-md" >
            Next <MdNavigateNext className="text-2xl"/>
        </Link>
        )}
        {page!==1 && (
        <Link href={`/blog?page=${page>1?page-1:page}&limit=${limit}`} className="flex items-center justify-center hover:bg-gray-200 dark:bg-zinc-800 dark:text-white p-2 px-4 rounded-md" >
        <MdNavigateBefore className="text-2xl"/>Previous
        </Link>
        )}
        </div>
      
            <div className="grid gap-3  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                blogData.blogs.map(blog => (
                    <BlogCard blog={blog} key={blog.slug} />
                ))
                }

            </div>
            {/* <Trigger limit={limit}></Trigger> */}
        </div>
    )
}