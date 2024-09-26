import { client } from '@/app/lib/contentful'
import { AboutProp } from './interfaces';

async function getIntro(): Promise<AboutProp> {
    const response = await client.getEntries({
        content_type: 'aboutMe',
        'fields.slug': 'things-about-me',
    })


  // Ensure there's at least one item in the response
  if (response.items.length === 0) {
    throw new Error(`No profile data found`);
}

const item = response.items[0];
const srcField = item.fields.profileImage as { fields: { file: { url: string } } };
return {
    title: item.fields.title as string,
    content: item.fields.content as string,
    sub_content: item.fields.sub_content as string,
}
}

export default async function AboutMe(){

    return (
        <div className="text-center ">
        <h3 className="text-3xl py-1 dark:text-white ">Things about me</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 md:text-xl">
    Passionate about building innovative solutions, I have expertise in  
    <span className="text-sky-500"> Software engineering</span>, 
    <span className="text-sky-500"> Data science</span>, and 
    <span className="text-sky-500"> Full-stack development</span>. My journey spans a variety of projects, from developing 
    <span className="text-sky-500"> Full-stack Web Applications</span> to tackling complex problems in 
    <span className="text-sky-500"> Natural Language Processing</span>, and 
    <span className="text-sky-500"> Computer Vision</span>.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 md:text-xl">
        When I’m not coding, you’ll find me playing video games, reading light novels, or strumming my guitar.
        </p>

      </div>
    )
}