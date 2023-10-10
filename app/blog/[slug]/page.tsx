import { client } from "@/app/lib/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, Document  } from '@contentful/rich-text-types';
import Image from "next/image"
import { Asset, BlogPost } from "../interfaces";


// get data based on slug
async function getBlog(slug: string): Promise<BlogPost> {
  const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug
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
      content: item.fields.content as Document  // Assuming Document is imported from '@contentful/rich-text-types'
  };
}



   // Add render options for unordered and ordered lists
const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <img
            src={node.data.target.fields.file.url}
            alt={node.data.target.fields.title}
          />
        );
      },
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="mt-8" >{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li >{children}</li>,
      [BLOCKS.QUOTE]: (node: any, children: any) => <blockquote >{children}</blockquote>,
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p className="mt-2 text-justify">{children}</p>
      // Add additional node types as needed
    },
  };

export default async function BlogDetails(
    {params}:{
        params: {
            slug: string
        }
    }
){
    const blog = await getBlog(params.slug)



    return (
        <div className="flex flex-col  items-center  ">
            <Image src={`https:${blog.thumbnail.url}`}
            width={blog.thumbnail.width}
            height={200}
            alt="image of blog"
            className="rounded-lg w-full md:w-3/4 lg:w-2/4"
            />
            <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl ">{blog.title}</h1>
            <div className="w-full md:w-3/4 lg:w-2/4">
                {documentToReactComponents(blog.content, options)}
            </div>
            
        </div>
    )
}