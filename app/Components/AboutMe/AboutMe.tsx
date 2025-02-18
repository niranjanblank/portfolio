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

export default async function AboutMe() {
    return (
        <div className="text-left mb-20 px-10 md:px-20 lg:px-50 xl:px-80">
            <h3 className="text-6xl py-1 font-bold dark:text-white">About Me.</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 md:text-xl">
                Hey there! I’m passionate about building creative and impactful solutions, whether it’s designing seamless 
                <span className="text-sky-500"> full-stack web applications</span>, diving into the depths of 
                <span className="text-sky-500"> software engineering</span>, or solving tricky problems in 
                <span className="text-sky-500"> data science</span>. I love taking on challenges in 
                <span className="text-sky-500"> Natural Language Processing</span> and 
                <span className="text-sky-500"> Computer Vision</span>, always looking for ways to push the boundaries of technology.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 md:text-xl">
                When I’m not coding, you’ll probably find me 
                <span className="text-sky-500"> strumming my guitar</span>, 
                <span className="text-sky-500"> getting lost in a great light novel</span>, or 
                <span className="text-sky-500"> playing video games</span> (because who doesn’t love a good challenge?).
            </p>
         
        </div>
    );
}