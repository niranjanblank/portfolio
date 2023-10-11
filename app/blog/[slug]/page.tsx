import { client } from "@/app/lib/contentful"
import { Document} from '@contentful/rich-text-types';
import Image from "next/image"
import { Asset, BlogPost } from "../interfaces";
import { RichText } from "@/app/Components/RichText/RichText";
import { format, parseISO } from 'date-fns';

// get data based on slug
async function getBlog(slug: string): Promise<BlogPost> {
  const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
  });

  // Ensure there's at least one item in the response
  if (response.items.length === 0) {
      throw new Error(`No blog post found for slug: ${slug}`);
  }

  const item = response.items[0];
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
      content: item.fields.content as Document  // Assuming Document is imported from '@contentful/rich-text-types'
  };
}


export default async function BlogDetails(
    {params}:{
        params: {
            slug: string
        }
    }
){
    const blog = await getBlog(params.slug)

    return (
        <div className="flex flex-col w-full md:w-3/4 lg:w-2/4">
            <Image src={`https:${blog.thumbnail.url}`}
            width={blog.thumbnail.width}
            height={blog.thumbnail.height}
            alt="image of blog"
            className="rounded-lg"
            priority = {true}
            />
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl ">{blog.title}</h1>
            <div className="prose dark:text-white">
                <RichText content={blog.content}/>
            </div>
            
        </div>
    )
}